import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Perfil } from "./pages/Perfil";

export function Router(){
  return(
    <Routes>
      <Route path="/" element={<Perfil/>} />
      <Route path="/home/:name" element={<HomePage/>} />
      <Route path="*" element={<h1 className="w-full text-6xl text-center mt-10">Pagina não encontrada</h1>} />
    </Routes>
  )
}