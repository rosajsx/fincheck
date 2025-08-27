import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import { authService } from "../../../app/services/authService";
import type { SigninParams } from "../../../app/services/authService/signin";

const schema = z.object({
  email: z.email("E-mail é obrigatório").nonempty("Informe um e-mail válido"),
  password: z
    .string()
    .nonempty("Senha é obrigatória")
    .min(8, "Senha deve conter 8 digitos."),
});

type FormData = z.infer<typeof schema>;

export function useLoginController() {
  const {
    register,
    handleSubmit: hookFormSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (data: SigninParams) => authService.signin(data),
  });

  const handleSubmit = hookFormSubmit(async (data) => {
    try {
      const { accessToken } = await mutateAsync(data);
      console.log({ accessToken });
    } catch (error) {
      toast.error("Credênciais inválidas.");
    }
  });

  return { handleSubmit, register, errors, isLoading: isPending };
}
