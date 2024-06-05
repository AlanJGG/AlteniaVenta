import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Venta = () => {
  const navigate = useNavigate();

  return (
    <div className="w-100 p-0 m-0">
      {/* Fecha y hora */}
      <div className="d-flex p-2 justify-content-between">
        <IconButton
          className="text-start"
          children={<ArrowBackIcon />}
          onClick={() => navigate("/main-page")}
        />
        <div className="d-flex gap-5 mx-5 mt-2">
          <div>Hora</div>
          <div>Fecha</div>
        </div>
      </div>
      {/* Venta de mostrador */}
      <div className="container"><div>HOLA</div></div>
      {/* Pedidos */}
      <div className="container"></div>
      {/* Acciones */}
      <div className="container"></div>
    </div>
  );
};
