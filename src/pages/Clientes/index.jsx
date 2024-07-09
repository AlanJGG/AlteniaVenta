import { Header1, Btn3, Btn0 } from "components";
import TextField from "@mui/material/TextField";

export const Clientes = () => {
  return (
    <div>
      <Header1 goBack="/main-page" />
      <div>
        <h1 className="d-flex justify-content-center mt-4   ">Clientes</h1>
        <div className="d-flex justify-content-center mt-3">
          <TextField
              color="secondary"
              type="text"
              size="small"
              label="Buscar..."
              variant="outlined"
            />
        </div>
        <div className="w-100 d-flex justify-content-center cientes-table-container mt-2">
          <table className="table table-hover table-sm w-50 clientes-table">
            <thead className="thead-dark clientes-header">
              <tr>
                <th>Cliente</th>
                <th>Total</th>
                <th className="d-flex justify-content-center">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Porton Rojo</td>
                <td>$1980</td>
                <td className="d-flex justify-content-center">
                  <Btn3 title="Ver" classes="mx-1" />
                  <Btn3 title="Pedido" classes="" />
                  <Btn3 title="Editar" classes="mx-1" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="d-flex justify-content-center mb-3">
          <Btn0 title="Agregar Cliente" />
        </div>
      </div>
    </div>
  );
};
