import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const ModalDeleteComponent = ({
  modalExcluir,
  alunoSelecionado,
  pedidoDelete,
  abrirFecharModalExcluir,
}) => {
  return (
    <div>
      <Modal isOpen={modalExcluir}>
        <ModalBody>
          Confirma a exclusão deste(a) aluno(a): {alunoSelecionado.nome}
        </ModalBody>

        <ModalFooter>
          <button className="btn btn-primary" onClick={() => pedidoDelete()}>
            Excluir
          </button>
          <button
            className="btn btn-secundary"
            onClick={() => abrirFecharModalExcluir()}
          >
            Cancelar
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalDeleteComponent;
