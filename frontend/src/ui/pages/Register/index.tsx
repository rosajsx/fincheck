import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

export function Register() {
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
      <form className="mt-[60px] flex flex-col gap-4">
        <Input name="name" type="text" placeholder="Nome" />
        <Input name="email" type="email" placeholder="E-mail" />
        <Input name="password" type="password" placeholder="Senha" />
        <Button type="submit" className="mt-2">
          Criar conta
        </Button>
      </form>
    </div>
  );
}
