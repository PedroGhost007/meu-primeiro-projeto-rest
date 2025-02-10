import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="w-screen h-screen flex items-center justify-center p-6">
      <div className="w-[500px] space-y-4">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.email && <span>Esse campo é obrigatorio</span>}
          </div>
          <div className="mb-6">
            <label
              htmlFor="senha"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Senha
            </label>
            <input
              {...register("senha")}
              type="password"
              id="senha"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate("/home")}
              className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            >
              Entrar
            </button>
            <input className="hover:bg-gray-900" type="submit" />
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2025 Pedro. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
