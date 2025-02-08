import { useState } from "react";

function FormPromotor(props) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="space-y-4 bg-slate-50 rounded-md p-6 shadow flex flex-col">
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        value={nome}
        onChange={(event) => setNome(event.target.value)}
        placeholder="Digite seu nome"
      />
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Digite seu email"
      />
      <button
        onClick={() => props.onCLickAddPromotor(nome, email)}
        className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
      >
        Cadastrar
      </button>
    </div>
  );
}

export default FormPromotor;
