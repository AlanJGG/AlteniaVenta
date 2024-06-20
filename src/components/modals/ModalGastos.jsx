import TextField from "@mui/material/TextField";

import { Btn0 } from "components";
import Modal from "react-bootstrap/Modal";

export const ModalGastos = ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide} backdrop="static" centered>
      <Modal.Header closeButton>
        <Modal.Title>Registrar gasto</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ display: "flex", justifyContent: "center" }}>
        <div className="d-block">
          <div className="p-2 w-100">
            <TextField
              color="secondary"
              type="text"
              size="small"
              label="Concepto"
              variant="outlined"
            />
          </div>
          <div className="p-2 w-100">
            <TextField
              color="secondary"
              type="number"
              size="small"
              label="Cantidad $"
              variant="outlined"
            />
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer style={{ display: "flex", justifyContent: "center" }}>
        <Btn0 title="Guardar" />
      </Modal.Footer>
    </Modal>
  );
};
