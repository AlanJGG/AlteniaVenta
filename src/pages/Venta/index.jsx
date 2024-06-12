import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Btn2 } from "components";

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
      <div className="container d-flex gap-3">
        <div className="ticket-container">
          <div className="ticket "></div>
          <div className="d-flex gap-3 justify-content-center mt-2">
            <Btn2 title="Cobrar en caja" />
            <Btn2 title="Agregar pedido" />
          </div>
        </div>
        <div className="venta-actions w-50">
          <div className="d-flex justify-content-center w-100 mb-1 subtitle">
            Agregar
          </div>
          <div className="d-flex justify-content-center">
            <table className="mb-2">
              <tr>
                <td className="p-1">
                  <Btn2 title="Tortilla" />
                </td>
                <td className="p-1">
                  <Btn2 title="Masa" />
                </td>
                <td className="p-1">
                  <Btn2 title="Totopo" />
                </td>
              </tr>
              
              <tr>
                <td className="p-1">
                  <Btn2 title="Salsa" />
                </td>
                <td className="p-1">
                  <Btn2 title="Salsa Macha" />
                </td>
                <td className="p-1">
                  <Btn2 title="Comida" />
                </td>
              </tr>
              <tr>
                <td className="p-1">
                  <Btn2 title="Tortilla azul" />
                </td>
                <td className="p-1">
                  <Btn2 title="Masa azul" />
                </td>
                <td className="p-1">
                  <Btn2 title="Sopes" />
                </td>
              </tr>
              <tr>
                <td className="p-1">
                  <Btn2 title="Papel" />
                </td>
                <td className="p-1">
                  <Btn2 title="Bolsa chica" />
                </td>
                <td className="p-1">
                  <Btn2 title="Bolsa grande" />
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      {/* Pedidos */}
      <div className="container"></div>
      {/* Acciones */}
      <div className="container"></div>
    </div>
  );
};
