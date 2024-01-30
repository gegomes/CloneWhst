// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Signin } from "../screen/Signin";
// import { PrivateRouter } from ".";

// export const AppRoutes = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Signin />} />
//         <Route path="/signin" element={<Signin />} />
//         <Route path="/dashboard" element={<PrivateRouter />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Signin } from "../screen/Signin";
import { PrivateRouter } from ".";
import { AuthGoogleContext } from "../Context/AuthContext";
import { useContext } from "react";

export const AppRoutes = () => {
  const { user } = useContext(AuthGoogleContext);

  // Verifica se o usuário está logado e redireciona para a página apropriada
  const renderRoutes = () => {
    if (user) {
      return <Navigate to="/dashboard" />;
    } else {
      return <Navigate to="/signin" />;
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Rota raiz redireciona para /dashboard se o usuário estiver logado, senão redireciona para /signin */}
        <Route path="/" element={renderRoutes()} />

        {/* Rota para o login */}
        <Route path="/signin" element={<Signin />} />

        {/* Rota protegida para a dashboard */}
        <Route path="/dashboard" element={<PrivateRouter />} />
      </Routes>
    </BrowserRouter>
  );
};

