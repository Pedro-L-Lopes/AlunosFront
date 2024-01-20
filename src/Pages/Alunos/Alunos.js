import "./Alunos.css";

// Api
import api from "../../Services/api";

// Hooks
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

// Icons
import { FiLogIn, FiEdit, FiUserX } from "react-icons/fi";

// Images
import logoCadastro from "../../Assets/Images/cadastro.png";

const Alunos = () => {
  const navigate = useNavigate();

  const [alunos, setAlunos] = useState([]);

  const [searchInput, SetSearchInput] = useState("");
  const [filter, setFilter] = useState("");

  const email = localStorage.getItem("email");
  const token = localStorage.getItem("token");

  const authorization = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const searchAlunos = (searchValue) => {
    SetSearchInput(searchValue);

    if (searchInput !== "") {
      const dadosFiltrados = alunos.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLocaleLowerCase());
      });
      setFilter(dadosFiltrados);
    } else {
      setFilter(alunos);
    }
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

  const editAluno = async (id) => {
    try {
      navigate(`/novo/${id}`);
    } catch (error) {
      alert("Não foi possivel editar o aluno.");
    }
  };

  const deleteAluno = async (id) => {
    try {
      if (window.confirm(`Deseja excluir o aluno de id: ${id} ?`)) {
        await api.delete(`/alunos/${id}`, authorization);
        setAlunos(alunos.filter((aluno) => aluno.id !== id));
      }
    } catch (error) {
      alert("Não foi possivel excluir o aluno " + error);
    }
  };

  useEffect(() => {
    api.get("alunos", authorization).then((response) => {
      setAlunos(response.data);
    }, token);
  }, []);

  return (
    <div className="aluno-container ">
      <header>
        <div>
          <img src={logoCadastro} alt="Logo do cadastro" />
          <button type="button">
            <FiLogIn size={35} color="#17202a" onClick={logout} />
          </button>
        </div>
        <span>
          Bem-Vindo, <strong>{email}</strong>!
        </span>
        <Link className="button" to="/novo/0">
          Novo Aluno
        </Link>
      </header>

      <form>
        <input
          type="text"
          placeholder="Filtrar por nome..."
          onChange={(e) => searchAlunos(e.target.value)}
        />
      </form>

      <h1>Relação de alunos</h1>
      {searchInput.length > 1 ? (
        <ul>
          {filter.map((aluno) => (
            <li key={aluno.id}>
              <b>Nome:</b>
              {aluno.nome}
              <br />
              <br />
              <b>Email:</b>
              {aluno.email}
              <br />
              <br />
              <b>Idade:</b>
              {aluno.idade}
              <br />
              <br />
              <button type="button" onClick={() => editAluno(aluno.id)}>
                <FiEdit size={25} color="#17202a" />
              </button>
              <button type="button" onClick={() => deleteAluno(aluno.id)}>
                <FiUserX size={25} color="#17202a" />
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <ul>
          {alunos.map((aluno) => (
            <li key={aluno.id}>
              <b>Nome:</b>
              {aluno.nome}
              <br />
              <br />
              <b>Email:</b>
              {aluno.email}
              <br />
              <br />
              <b>Idade:</b>
              {aluno.idade}
              <br />
              <br />

              <button type="button" onClick={() => editAluno(aluno.id)}>
                <FiEdit size={25} color="#17202a" />
              </button>

              <button type="button" onClick={() => deleteAluno(aluno.id)}>
                <FiUserX size={25} color="#17202a" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Alunos;
