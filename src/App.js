import "./App.css";

//
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Alunos from "../src/Pages/Alunos";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Alunos />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
