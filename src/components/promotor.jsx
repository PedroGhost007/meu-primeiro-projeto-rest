import { CheckIcon, PencilIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Promotor(props) {
  const navigate = useNavigate();
  return (
    <ul className="bg-slate-50 rounded-md p-6 shadow space-y-4">
      {props.promotor.map((item) => (
        <li key={item.id} className="flex gap-2">
          <button
            onClick={() => props.onCLickSetCompleted(item.id)}
            className={`bg-gray-300 p-2 flex items-center gap-2 rounded-md w-full text-left text-gray-700 ${
              item.isCompleted && "line-through"
            }`}
          >
            {item.isCompleted && <CheckIcon />}
            {item.nome}
          </button>
          <button
            onClick={() => navigate("/promotor")}
            className="bg-gray-300 p-2 rounded-md text-gray-700"
          >
            <PencilIcon />
          </button>
          <button
            onClick={() => props.onCLickDeletePromotor(item.id)}
            className="bg-gray-300 p-2 rounded-md text-gray-700"
          >
            <TrashIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Promotor;
