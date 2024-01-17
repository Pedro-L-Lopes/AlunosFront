import "./NovoAluno.css";

import { Link, useParams } from "react-router-dom";

import { FiCornerDownLeft, FiUserPlus } from "react-icons/fi";

const NovoAluno = () => {
  const { alunoId } = useParams();

  return (
    <div className="novo-aluno-container">
      <div className="content">
        <FiUserPlus size={105} color="red" />
        <h1>{alunoId === "0" ? "Adicionar novo aluno" : "Editar aluno"}</h1>
        <Link className="back-link" to="/alunos">
          <FiCornerDownLeft size={25} color="red" />
          Voltar
        </Link>
        <section className="form"></section>
        <form>
          <input type="text" placeholder="Nome" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Idade" />
          <button className="button" type="submit">
            {alunoId === "0" ? "Adicionar" : "Editar"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default NovoAluno;
