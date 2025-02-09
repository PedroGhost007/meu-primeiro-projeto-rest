import { useState } from "react";
import FormParque from "../components/formParque";
import Parque from "../components/parque";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

function ParquePage() {
  const [parque, setParque] = useState([
    {
      id: 1,
      nome: "Patati Patata",
      cidade: "Uberlândia",
      isEditing: false,
    },
    {
      id: 2,
      nome: "Patrulha Canina",
      cidade: "Uberlândia",
      isEditing: false,
    },
    {
      id: 3,
      nome: "Escorregador Magico",
      cidade: "São Paulo",
      isEditing: false,
    },
  ]);

  const navigate = useNavigate();
  const [nomeEditado, setNomeEditado] = useState("");
  const [cidadeEditado, setCidadeEditado] = useState("");

  function onCLickAddParque(nome, cidade) {
    const newParque = {
      id: uuidv4(),
      nome,
      cidade,
    };
    setParque([...parque, newParque]);
  }

  function onClickEdit(IDparque) {
    const parqueSelecionado = parque.find((item) => item.id === IDparque);
    if (parqueSelecionado) {
      setNomeEditado(parqueSelecionado.nome);
      setCidadeEditado(parqueSelecionado.cidade);
    }

    setParque((parquesAnteriores) =>
      parquesAnteriores.map((parque) =>
        //O perador ternario "?" funciona da seguinte maneira. Caso a condição seja verdadeira ele executa a primeira parte depois do ?
        //Caso a condição seja falsa a segunda ação é executada (após os ":")
        parque.id === IDparque
          ? { ...parque, isEditing: !parque.isEditing }
          : parque
      )
    );
  }

  function onClickSaveEdit(IDparque, novoNome, novaCidade) {
    const newParque = parque.map((parque) => {
      if (parque.id === IDparque) {
        return {
          ...parque,
          isEditing: !parque.isEditing,
          nome: novoNome,
          cidade: novaCidade,
        };
      }
      return parque;
    });
    setParque(newParque);
  }

  function onClickDelete(IDparque) {
    setParque((parqueSelecionado) =>
      parqueSelecionado.filter((parque) => parque.id !== IDparque)
    );
  }

  return (
    <div className="bg-gray-300 flex h-screen">
      {/* Sidebar flexível */}
      <div className="w-60 bg-gray-800 text-white h-full p-6 hidden md:block">
        <h2 className="text-xl font-bold mb-4">Navegação</h2>
        <nav className="space-y-2">
          <button
            onClick={() => navigate("/promotor")}
            className="block p-2 rounded hover:bg-gray-700"
          >
            Cadastrar Promotor
          </button>
          <button
            onClick={() => navigate("/parque")}
            className="block p-2 rounded hover:bg-gray-700"
          >
            Cadastrar Parques
          </button>
        </nav>
      </div>

      {/* Conteúdo principal centralizado */}
      <div className="flex flex-1  justify-center p-6">
        <div className="w-[500px] space-y-4">
          <FormParque onCLickAddParque={onCLickAddParque} />
          <Parque
            parque={parque}
            onClickEdit={onClickEdit}
            onClickDelete={onClickDelete}
          />
          {parque.map(
            (item) =>
              item.isEditing && (
                <div
                  key={item.id}
                  className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
                >
                  <div className="bg-white p-6 rounded shadow-lg w-96 space-y-4">
                    <h2 className=" text-gray-700 font-bold text-center">
                      Editar valor
                    </h2>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      value={nomeEditado}
                      onChange={(event) => setNomeEditado(event.target.value)}
                      placeholder="Digite seu nome"
                    />
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      value={cidadeEditado}
                      onChange={(event) => setCidadeEditado(event.target.value)}
                      placeholder="Digite seu nome"
                    />
                    <div className="flex gap-2">
                      <button
                        className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                        onClick={() =>
                          onClickSaveEdit(item.id, nomeEditado, cidadeEditado)
                        }
                      >
                        Salvar
                      </button>
                      <button
                        className="bg-gray-400 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        onClick={() => onClickEdit(item.id)}
                      >
                        Fechar
                      </button>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default ParquePage;
