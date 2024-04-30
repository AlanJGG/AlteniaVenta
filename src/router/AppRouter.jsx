import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { ROUTES } from '../utils/routes/index';


export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<ROUTES />} />
      </Routes>
    </BrowserRouter>
  )
}