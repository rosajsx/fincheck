import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { useLoginController } from "./useLoginController";

export function Login() {
  const { register, handleSubmit, errors, isLoading } = useLoginController();
  return (
    <div>
      <header className="flex flex-col items-center gap-4 text-gray-900">
        <h1 className="text-2xl  font-bold tracking=[-1px]">
          Entre em sua conta
        </h1>
        <p className="space-x-2">
          <span className="text-gray-700 tracking-[-0.5px]">
            Novo por aqui?
          </span>
          <Link
            to="/register"
            className="tracking-[-0.5px] font-medium text-teal-900"
          >
            Crie uma conta
          </Link>
        </p>
      </header>
      <form
        onSubmit={handleSubmit}
        className="mt-[60px] flex flex-col gap-4"
        noValidate
      >
        <Input
          {...register("email")}
          type="email"
          placeholder="E-mail"
          error={errors.email?.message}
        />
        <Input
          {...register("password")}
          type="password"
          placeholder="Senha"
          error={errors.password?.message}
        />
        <Button type="submit" className="mt-2" isLoading={isLoading}>
          Entrar
        </Button>
      </form>
    </div>
  );
}
