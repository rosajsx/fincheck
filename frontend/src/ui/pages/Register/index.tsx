import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { useRegisterController } from "./useRegisterController";

export function Register() {
  const { errors, handleSubmit, register, isLoading } = useRegisterController();
  return (
    <div>
      <header className="flex flex-col items-center gap-4 text-gray-900 text-center">
        <h1 className="text-2xl  font-bold tracking=[-1px]">Crie sua conta</h1>
        <p className="space-x-2">
          <span className="text-gray-700 tracking-[-0.5px]">
            Novo por aqui?
          </span>
          <Link
            to="/login"
            className="tracking-[-0.5px] font-medium text-teal-900"
          >
            Fazer login
          </Link>
        </p>
      </header>
      <form className="mt-[60px] flex flex-col gap-4" onSubmit={handleSubmit}>
        <Input
          {...register("name")}
          error={errors.name?.message}
          type="text"
          placeholder="Nome"
        />
        <Input
          {...register("email")}
          error={errors.email?.message}
          type="email"
          placeholder="E-mail"
        />
        <Input
          {...register("password")}
          error={errors.password?.message}
          type="password"
          placeholder="Senha"
        />
        <Button type="submit" className="mt-2" isLoading={isLoading}>
          Criar conta
        </Button>
      </form>
    </div>
  );
}
