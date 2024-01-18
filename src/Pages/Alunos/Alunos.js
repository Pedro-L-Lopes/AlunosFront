import "./Alunos.css";

// Api
import api from "../../Services/api";

// Hooks
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

// Icons
import { FiXCircle, FiEdit, FiUserX } from "react-icons/fi";

// Images
import logoCadastro from "../../Assets/Images/cadastro.png";

const Alunos = () => {
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [alunos, setAlunos] = useState([]);

  const email = localStorage.getItem("email");
  const token = localStorage.getItem("token");

  const authorization = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const logout = async () => {
    try {
      localStorage.clear();
      localStorage.setItem("token", "");
      authorization.headers = "";

      navigate("/");
    } catch (error) {
      alert("Occorreu um erro ao sair. " + error);
    }
  };

  useEffect(() => {
    api.get("alunos", authorization).then((response) => {
      setAlunos(response.data);
    }, token);
  }, []);

  return (
    <div className="alunos-container">
      <h1>Olá {email}</h1>
      <img src={logoCadastro} alt="Logo do cadastro" />
      <Link to="aluno/novo/0">Novo Aluno</Link>
      <button type="button">
        <FiXCircle size={35} color="red" onClick={logout} />
      </button>
      <form>
        <input type="text" placeholder="Nome" />
        <button type="button" className="button">
          Filtrar aluno por nome
        </button>
      </form>
      <h1>Relação de alunos</h1>
      <ul>
        {alunos.map((aluno) => (
          <li key={aluno.id}>
            <b>Nome: </b> {aluno.nome} <br />
            <b>Email: </b> {aluno.email} <br />
            <b>Idade: </b> {aluno.idade}
            <br />
            <button type="button">
              <FiEdit size={35} color="red" />
            </button>
            <button type="button">
              <FiUserX size={35} color="red" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Alunos;
