import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const ModalComponent = ({
  modalIncluir,
  handleChange,
  pedidoPost,
  abrirFecharModal,
}) => {
  return (
    <Modal isOpen={modalIncluir}>
      <ModalHeader>Incluir Alunos</ModalHeader>
      <ModalBody>
        <div className="form-group">
          <label>Nome: </label>
          <br />
          <input
            type="text"
            className="form-control"
            name="nome"
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
            onChange={handleChange}
          />
          <br />
          <label>Idade: </label>
          <br />
          <input
            type="text"
            className="form-control"
            name="idade"
            onChange={handleChange}
          />
          <br />
        </div>
      </ModalBody>
      <ModalFooter>
        <button className="btn btn-primary" onClick={() => pedidoPost()}>
          Incluir
        </button>
        <button className="btn btn-danger" onClick={() => abrirFecharModal()}>
          Cancelar
        </button>
      </ModalFooter>
    </Modal>
  );
};

export default ModalComponent;
