import { PencilIcon, TrashIcon } from "lucide-react";

function Parque(props) {
  return (
    <ul className="bg-slate-50 rounded-md p-6 shadow space-y-4">
      {props.parque.map((item) => (
        <li key={item.id} className="flex gap-2">
          <h3
            className={`bg-gray-300 p-2 flex items-center gap-2 rounded-md w-full text-left text-gray-700`}
          >
            {item.nome}
          </h3>
          <button
            onClick={() => {
              props.onClickEdit(item.id);
            }}
            className="bg-gray-300 p-2 rounded-md text-gray-700"
          >
            <PencilIcon />
          </button>
          <button
            onClick={() => props.onClickDelete(item.id)}
            className="bg-gray-300 p-2 rounded-md text-gray-700"
          >
            <TrashIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Parque;
