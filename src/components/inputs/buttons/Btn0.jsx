import { useNavigate } from "react-router-dom";

export const Btn0 = ({ title, onClick, style }) => {
  const navigate = useNavigate();
  return (
    <button className="btn0" onClick={onClick} style={style}>
      {title}
    </button>
  );
};
