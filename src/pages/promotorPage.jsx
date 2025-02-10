import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import Promotor from "../components/promotor";
import FormPromotor from "../components/formPromotor";

function PromotorPage() {
  const [promotor, setPromotor] = useState([
    {
      id: 1,
      nome: "Pedro",
      email: "pedro@email.com",
      isCompleted: false,
      isEditing: false,
    },
    {
      id: 2,
      nome: "Bruno",
      email: "bruno@email.com",
      isCompleted: false,
      isEditing: false,
    },
    {
      id: 3,
      nome: "Rebeca",
      email: "rebeca@email.com",
      isCompleted: false,
      isEditing: false,
    },
  ]);

  const [nomeEditado, setNomeEditado] = useState("");
  const [emailEditado, setEmailEditado] = useState("");
  const navigate = useNavigate();

  function onCLickSetCompleted(IDpromotor) {
    const promotorSelecionado = promotor.map((promotor) => {
      if (promotor.id === IDpromotor) {
        return { ...promotor, isCompleted: !promotor.isCompleted };
      }
      return promotor;
    });

    setPromotor(promotorSelecionado);
  }

  //No delete não precisamos fazer o map, usamos direto o filter
  function onCLickDeletePromotor(IDpromotor) {
    /*Maneira incorreta realizada durante aprendizagem
    map() retorna um array do mesmo tamanho, modificando apenas os elementos
    ja o filter() filtra os elementos que atendem a condição especificada
    const promotorDeletado = promotor.map((promotor) => {
      promotor.filter((promotor) => promotor.id != IDpromotor);
    });
    */
    //MANEIRA CERTA
    const promotorDeletado = promotor.filter(
      (promotor) => promotor.id !== IDpromotor
    );

    setPromotor(promotorDeletado);
  }

  function onCLickAddPromotor(nome, email) {
    const newPromotor = {
      id: uuidv4(),
      nome: nome,
      email: email,
      isCompleted: false,
      isEditing: false,
    };

    setPromotor([...promotor, newPromotor]);
  }

  function onClickEditPromotor(IDpromotor) {
    const promotorSelecionado = promotor.find((item) => item.id === IDpromotor);
    if (promotorSelecionado) {
      setNomeEditado(promotorSelecionado.nome);
      setEmailEditado(promotorSelecionado.email);
    }

    setPromotor((promotoresAtuais) =>
      promotoresAtuais.map((promotor) =>
        promotor.id === IDpromotor
          ? { ...promotor, isEditing: !promotor.isEditing }
          : promotor
      )
    );
  }

  function onClickSavePromotor(IDpromotor, nome, email) {
    setPromotor((promotorEditado) =>
      promotorEditado.map((promotor) =>
        promotor.id === IDpromotor
          ? { ...promotor, nome: nome, email: email, isEditing: false }
          : promotor
      )
    );
  }

  return (
    <div className="bg-gray-300 flex h-screen">
      {/* Sidebar flexível */}
      <div className="w-60 bg-gray-800 text-white h-full p-6 hidden md:block">
        <h2 className="text-xl font-bold mb-4">Navegação</h2>
        <nav className="space-y-2">
          <a href="#home" className="block p-2 rounded hover:bg-gray-700">
            Cadastrar Promotor
          </a>
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
          <FormPromotor onCLickAddPromotor={onCLickAddPromotor} />
          <Promotor
            promotor={promotor}
            onCLickSetCompleted={onCLickSetCompleted}
            onCLickDeletePromotor={onCLickDeletePromotor}
            onClickEditPromotor={onClickEditPromotor}
          />
          {promotor.map(
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
                      value={emailEditado}
                      onChange={(event) => setEmailEditado(event.target.value)}
                      placeholder="Digite seu nome"
                    />
                    <div className="flex gap-2">
                      <button
                        className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                        onClick={() =>
                          onClickSavePromotor(
                            item.id,
                            nomeEditado,
                            emailEditado
                          )
                        }
                      >
                        Salvar
                      </button>
                      <button
                        className="bg-gray-400 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        onClick={() => onClickEditPromotor(item.id)}
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

export default PromotorPage;
