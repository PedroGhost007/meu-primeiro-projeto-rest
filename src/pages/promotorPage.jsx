import { useNavigate } from "react-router-dom";

function PromotorPage() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Teste</h1>
      <button onClick={() => navigate(-1)}>VOLTAR</button>
    </div>
  );
}

export default PromotorPage;
