import "./NovoAluno.css";

// Hooks
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

// Icons
import { FiCornerDownLeft, FiUserPlus } from "react-icons/fi";

// Api
import api from "../../Services/api";
import axios from "axios";

const NovoAluno = () => {
  const [id, setId] = useState(null);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [idade, setIdade] = useState(0);

  const { alunoId } = useParams();

  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const authorization = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const loadAluno = async () => {
    try {
      const response = await api.get(`/alunos/${alunoId}`, authorization);

      setId(response.data.id);
      setNome(response.data.nome);
      setEmail(response.data.email);
      setIdade(response.data.idade);
    } catch (error) {
      alert("Erro ao obter dados do aluno " + error);
      navigate("/alunos");
    }
  };

  const saveOrUpdate = async (e) => {
    e.preventDefault();

    const data = {
      nome,
      email,
      idade,
    };

    try {
      if (alunoId === "0") {
        await api.post("alunos", data, authorization);
      } else {
        data.id = id;
        await api.put(`alunos/${id}`, data, authorization);
      }
    } catch (error) {
      alert("Erro ao salvar aluno!" + error);
    }

    navigate("/alunos");
  };

  useEffect(() => {
    if (alunoId === "0") {
      return;
    } else {
      loadAluno();
    }
  }, [alunoId]);

  return (
    <div className="novo-aluno-container">
      <div className="content">
        <section className="form">
          <FiUserPlus size={105} color="#17202a" />
          <h1>{alunoId === "0" ? "Adicionar novo aluno" : "Editar aluno"}</h1>
        </section>
        <form onSubmit={saveOrUpdate}>
          <input
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Idade"
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
          />
          <button className="button" type="submit">
            {alunoId === "0" ? "Adicionar" : "Editar"}
          </button>
        </form>
        <Link className="back-link" to="/alunos">
          <FiCornerDownLeft size={25} color="#17202a" />
          Voltar
        </Link>
      </div>
    </div>
  );
};

export default NovoAluno;
