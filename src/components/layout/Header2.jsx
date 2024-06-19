import { useNavigate } from "react-router-dom";

export const Header2 = () => {
  const navigate = useNavigate();
  return (
    <div className="d-flex p-2 justify-content-between header1 pb-3">
      <div className="d-flex mx-5">
        <div className="subtitle mt-2">Atiende:</div>
      </div>

      <div className="d-flex gap-5 mx-5 mt-2">
        <div>Hora</div>
        <div>Fecha</div>
      </div>
    </div>
  );
};
