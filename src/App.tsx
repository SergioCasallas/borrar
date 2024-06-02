import { Route, Routes } from "react-router-dom";

import { GlobalProvider } from "./context/globalContext";
import { Login, Income } from "./pages";
import api from "./utils/axiosInterceptor";

function App() {
  api();

  return (
    <GlobalProvider>
      <Routes>
        <Route element={<Login />} path="/" />
        <Route element={<Income />} path="/income" />
      </Routes>
    </GlobalProvider>
  );
}

export default App;
