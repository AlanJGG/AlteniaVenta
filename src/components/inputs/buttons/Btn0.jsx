import { useNavigate } from "react-router-dom";

export const Btn0 = ({ title, onClick }) => {
  const navigate = useNavigate();
  return (
    <button className="btn0" onClick={onClick}>
      {title}
    </button>
  );
};
