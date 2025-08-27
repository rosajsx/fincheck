import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

import z from "zod";
import { authService } from "../../../app/services/authService";
import type { SignupParams } from "../../../app/services/authService/signup";

const schema = z.object({
  name: z.string().nonempty("Nome é obrigatório."),
  email: z.email("E-mail é obrigatório").nonempty("Informe um e-mail válido"),
  password: z
    .string()
    .nonempty("Senha é obrigatória")
    .min(8, "Senha deve conter 8 digitos."),
});

type FormData = z.infer<typeof schema>;

export function useRegisterController() {
  const {
    handleSubmit: hookFormSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (data: SignupParams) => authService.signup(data),
  });

  const handleSubmit = hookFormSubmit(async (data) => {
    try {
      const { accessToken } = await mutateAsync(data);
    } catch (error) {
      toast.error("Ocorreu um erro ao criar a sua conta.");
    }
  });

  return {
    register,
    handleSubmit,
    errors,
    isLoading: isPending,
  };
}
