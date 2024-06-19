import { Btn1 } from "components";
import { Btn0 } from "components";
import Modal from "react-bootstrap/Modal";

export const ModalClientes = ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide} backdrop="static" centered>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Btn0 title="Guardar" />
      </Modal.Footer>
    </Modal>
  );
};
