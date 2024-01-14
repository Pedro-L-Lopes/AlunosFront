import { useState, useEffect } from "react";

import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

import LogoCadastro from "../Assets/Images/cadastro.png";

const Alunos = () => {
  const baseUrl = "https://localhost:7065/api/Alunos";

  const [data, setData] = useState([]);

  const pedidoGet = async () => {
    try {
      const response = await axios.get(baseUrl);

      if (response) {
        setData(response.data); // Aqui você lida com os dados da resposta
      } else {
        console.error("Resposta indefinida.");
      }
    } catch (error) {
      console.error("Erro na solicitação:", error);
    }
  };

  useEffect(() => {
    pedidoGet();
  }, []);

  return (
    <div>
      <br />
      <h1>Cadastro de Alunos</h1>
      <header>
        <img src={LogoCadastro} alt="Logo do cadastro" />
        <button className="btn btn-success">Incluir novo aluno</button>
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
                <button className="btn btn-primary">Editar</button>
                <button className="btn btn-danger">Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Alunos;
