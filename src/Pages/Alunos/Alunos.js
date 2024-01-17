import "./Alunos.css";

import { Link } from "react-router-dom";

import { FiXCircle, FiEdit, FiUserX } from "react-icons/fi";

import logoCadastro from "../../Assets/Images/cadastro.png";

const Alunos = () => {
  return (
    <div className="alunos-container">
      <h1>Cadastro de Alunos</h1>
      <img src={logoCadastro} alt="Logo do cadastro" />
      <Link to="aluno/novo/0">Novo Aluno</Link>
      <button type="button">
        <FiXCircle size={35} color="red" />
      </button>
      <form>
        <input type="text" placeholder="Nome" />
        <button type="button" className="button">
          Filtrar aluno por nome
        </button>
      </form>
      <h1>Relação de alunos</h1>
      <ul>
        <li>
          <b>Nome:</b>

          <b>Email:</b>

          <b>Idade:</b>
        </li>
        <button type="button">
          <FiEdit size={35} color="red" />
        </button>
        <button type="button">
          <FiUserX size={35} color="red" />
        </button>
      </ul>
    </div>
  );
};

export default Alunos;
