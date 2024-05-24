import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Home, Main, Venta, Gastos, Corte } from "pages";

export const ROUTES = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:code/:code2" element={<Home />} />
      <Route path="/main-page" element={<Main />} />
      <Route path="/venta" element={<Venta />} />
      <Route path="/gastos" element={<Gastos />} />
      <Route path="/corte" element={<Corte />} />

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
