import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconButton from "@mui/material/IconButton";

import { useNavigate } from "react-router-dom";

export const Header1 = ({ goBack }) => {
  const navigate = useNavigate();
  return (
    <div className="d-flex p-2 justify-content-between">
      <IconButton
        className="text-start"
        children={<ArrowBackIcon />}
        onClick={() => navigate(goBack)}
      />
      <div className="d-flex gap-5 mx-5 mt-2">
        <div>Hora</div>
        <div>Fecha</div>
      </div>
    </div>
  );
};
