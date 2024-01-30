import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthGoogleContext } from '../Context/AuthContext';
import { Dashboard } from '../screen/dashboard';
import { Signin } from '../screen/Signin';
import { useContext } from 'react';

export const PrivateRouter = () => {
  const { user } = useContext(AuthGoogleContext);

  return (
    <Routes>
      {/* Rota para o login */}
      <Route path="/signin" element={<Signin />} />
      
      {/* Rota para o dashboard */}
      <Route path="/" element={user ? <Dashboard /> : <Navigate to="/signin" replace />} />
    </Routes>
  );
};
