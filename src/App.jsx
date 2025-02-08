import { useState } from "react";
import FormPromotor from "./components/formPromotor";
import Promotor from "./components/promotor";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [promotor, setPromotor] = useState([
    {
      id: 1,
      nome: "Pedro",
      email: "pedro@email.com",
      isCompleted: false,
    },
    {
      id: 2,
      nome: "Bruno",
      email: "bruno@email.com",
      isCompleted: false,
    },
    {
      id: 3,
      nome: "Rebeca",
      email: "rebeca@email.com",
      isCompleted: false,
    },
  ]);

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
    };

    setPromotor([...promotor, newPromotor]);
  }

  return (
    <div className="bg-gray-300 justify-center flex w-screen h-screen p-6">
      <div className="w-[500px] space-y-4">
        <FormPromotor onCLickAddPromotor={onCLickAddPromotor} />
        <Promotor
          promotor={promotor}
          onCLickSetCompleted={onCLickSetCompleted}
          onCLickDeletePromotor={onCLickDeletePromotor}
        />
      </div>
    </div>
  );
}

export default App;
