import { Route, Routes } from 'react-router-dom';

// import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { ROUTES } from '../utils/routes/index';


export const AppRouter = () => {
  return (
    <Routes>

        {/* Login y Registro */}
        {/* <Route path="/auth/*" element={ <AuthRoutes /> } /> */}

        {/* VisitanteApp */}
        <Route path="/*" element={ <ROUTES /> } />
        
    </Routes>
  )
}