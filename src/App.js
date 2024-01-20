import "./App.css";

// Hooks
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Login from "./Pages/Login/Login";
import Alunos from "./Pages/Alunos/Alunos";
import NovoAluno from "./Pages/NovoAluno/NovoAluno";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/alunos" element={<Alunos />} />
          <Route path="/novo/:alunoId" element={<NovoAluno />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
