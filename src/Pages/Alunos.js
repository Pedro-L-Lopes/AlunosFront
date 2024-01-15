import { useState, useEffect } from "react";

import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";

import LogoCadastro from "../Assets/Images/cadastro.png";
import ModalComponent from "../Components/ModalComponent";
import ModalEditComponent from "../Components/ModalEditComponent";
import ModalDeleteComponent from "../Components/ModalDeleteComponent";

const Alunos = () => {
  const baseUrl = "https://localhost:7065/api/Alunos";

  const [data, setData] = useState([]);
  const [modalIncluir, setModalIcluir] = useState(false);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalExcluir, setModalExcluir] = useState(false);
  const [updateData, setUpdateData] = useState(true);
  const [alunoSelecionado, setAlunoSelecionado] = useState({
    id: "",
    nome: "",
    email: "",
    idade: "",
  });

  const abrirFecharModal = () => {
    setModalIcluir(!modalIncluir);
  };

  const abrirFecharModalEditar = () => {
    setModalEditar(!modalEditar);
  };

  const abrirFecharModalExcluir = () => {
    setModalExcluir(!modalExcluir);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAlunoSelecionado({
      ...alunoSelecionado,
      [name]: value,
    });
    console.log(alunoSelecionado);
  };

  const selecionarAluno = (aluno, opcao) => {
    setAlunoSelecionado(aluno);
    opcao === "Editar" ? abrirFecharModalEditar() : abrirFecharModalExcluir();
  };

  // Requests
  const pedidoGet = async () => {
    try {
      const response = await axios.get(baseUrl);

      if (response) {
        setData(response.data);
      } else {
        console.error("Resposta indefinida.");
      }
    } catch (error) {
      console.error("Erro na solicitação:", error);
    }
  };

  const pedidoPost = async () => {
    try {
      delete alunoSelecionado.id;
      alunoSelecionado.idade = parseInt(alunoSelecionado.idade);

      const response = await axios.post(baseUrl, alunoSelecionado);

      if (response) {
        setData(data.concat(response.data));
        abrirFecharModal();
      } else {
        console.error("Resposta indefinida.");
      }
    } catch (error) {
      console.error("Erro na solicitação:", error);
    }
  };

  const pedidoPut = async () => {
    alunoSelecionado.idade = parseInt(alunoSelecionado.idade);
    await axios
      .put(`${baseUrl}/${alunoSelecionado.id}`, alunoSelecionado)
      .then((response) => {
        setData((prevData) =>
          prevData.filter((aluno) => aluno.id !== alunoSelecionado.id)
        );
        pedidoGet();
        abrirFecharModalEditar();
      });
  };

  const pedidoDelete = async () => {
    await axios.delete(`${baseUrl}/${alunoSelecionado.id}`).then(() => {
      setData((prevData) =>
        prevData.filter((aluno) => aluno.id !== alunoSelecionado.id)
      );
      abrirFecharModalExcluir();
    });
  };

  useEffect(() => {
    if (updateData) {
      pedidoGet();
      setUpdateData(true);
    }
  }, [updateData]);

  return (
    <div className="App">
      <br />
      <h1>Cadastro de Alunos</h1>
      <header>
        <img className="App-logo" src={LogoCadastro} alt="Logo do cadastro" />
        <button className="btn btn-success" onClick={() => abrirFecharModal()}>
          Incluir novo aluno
        </button>
      </header>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Idade</th>
            <th>Operação</th>
          </tr>
        </thead>
        <tbody>
          {data.map((aluno) => (
            <tr key={aluno.id}>
              <td>{aluno.id}</td>
              <td>{aluno.nome}</td>
              <td>{aluno.email}</td>
              <td>{aluno.idade}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => selecionarAluno(aluno, "Editar")}
                >
                  Editar
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => selecionarAluno(aluno, "Excluir")}
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ModalComponent
        modalIncluir={modalIncluir}
        handleChange={handleChange}
        pedidoPost={pedidoPost}
        abrirFecharModal={abrirFecharModal}
      />
      <ModalEditComponent
        modalEditar={modalEditar}
        handleChange={handleChange}
        pedidoPut={pedidoPut}
        abrirFecharModalEditar={abrirFecharModalEditar}
        alunoSelecionado={alunoSelecionado}
      />
      <ModalDeleteComponent
        modalExcluir={modalExcluir}
        alunoSelecionado={alunoSelecionado}
        pedidoDelete={pedidoDelete}
        abrirFecharModalExcluir={abrirFecharModalExcluir}
      />
    </div>
  );
};

export default Alunos;
