import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

// import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { ROUTES } from "../utils/routes/index";

export const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/*" element={<ROUTES />} />
      </Routes>
    </HashRouter>
  );
};
