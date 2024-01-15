import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const ModalEditComponent = ({
  modalEditar,
  handleChange,
  pedidoPut,
  abrirFecharModalEditar,
  alunoSelecionado,
}) => {
  return (
    <Modal isOpen={modalEditar}>
      <ModalHeader>EditarAlunos</ModalHeader>
      <ModalBody>
        <div className="form-group">
          <label>ID: </label>
          <br />
          <input
            readOnly
            type="text"
            value={alunoSelecionado && alunoSelecionado.id}
          />
          <br />
          <label>Nome: </label>
          <br />
          <input
            type="text"
            className="form-control"
            name="nome"
            value={alunoSelecionado && alunoSelecionado.nome}
            onChange={handleChange}
            required
          />
          <br />
          <label>Email: </label>
          <br />
          <input
            type="text"
            className="form-control"
            name="email"
            value={alunoSelecionado && alunoSelecionado.email}
            onChange={handleChange}
          />
          <br />
          <label>Idade: </label>
          <br />
          <input
            type="text"
            className="form-control"
            name="idade"
            value={alunoSelecionado && alunoSelecionado.idade}
            onChange={handleChange}
          />
          <br />
        </div>
      </ModalBody>
      <ModalFooter>
        <button className="btn btn-primary" onClick={() => pedidoPut()}>
          Editar
        </button>
        <button
          className="btn btn-danger"
          onClick={() => abrirFecharModalEditar()}
        >
          Cancelar
        </button>
      </ModalFooter>
    </Modal>
  );
};

export default ModalEditComponent;
