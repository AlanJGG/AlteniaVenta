import { useNavigate } from "react-router-dom";

export const Btn1 = ({ title, route }) => {
  const navigate = useNavigate();
  return (
    <button className="btn1" onClick={() => navigate(route)}>
      {title}
    </button>
  );
};
