import { Header1, ModalClientes, ModalGastos, Btn2 } from "components";

import { useState } from "react";

export const Venta = () => {
  const [showModalClientes, setShowModalClientes] = useState(false);
  const [showModalGastos, setShowModalGastos] = useState(false);

  return (
    <div className="w-100 p-0 m-0">
      {/* Fecha y hora */}
      <Header1 goBack={"/main-page"} />
      {/* Venta de mostrador */}
      <div className="container d-flex gap-3">
        <div className="ticket-container">
          <div className="ticket "></div>
          <div className="d-flex gap-3 justify-content-center mt-2">
            <Btn2 title="Cobrar en caja" />
            <Btn2 title="Agregar pedido" />
          </div>
        </div>
        <div className="venta-actions w-50">
          <div className="d-flex justify-content-center w-100 mb-1 subtitle">
            Agregar
          </div>
          <div className="d-flex justify-content-center">
            <table className="mb-2">
              <tr>
                <td className="p-1">
                  <Btn2 title="Tortilla" />
                </td>
                <td className="p-1">
                  <Btn2 title="Masa" />
                </td>
                <td className="p-1">
                  <Btn2 title="Totopo" />
                </td>
              </tr>

              <tr>
                <td className="p-1">
                  <Btn2 title="Salsa" />
                </td>
                <td className="p-1">
                  <Btn2 title="Salsa Macha" />
                </td>
                <td className="p-1">
                  <Btn2 title="Comida" />
                </td>
              </tr>
              <tr>
                <td className="p-1">
                  <Btn2 title="Tortilla azul" />
                </td>
                <td className="p-1">
                  <Btn2 title="Masa azul" />
                </td>
                <td className="p-1">
                  <Btn2 title="Sopes" />
                </td>
              </tr>
              <tr>
                <td className="p-1">
                  <Btn2 title="Papel" />
                </td>
                <td className="p-1">
                  <Btn2 title="Bolsa chica" />
                </td>
                <td className="p-1">
                  <Btn2 title="Bolsa grande" />
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      {/* Pedidos */}
      <div className="container">
        <div className="subtitle d-flex justify-content-center">Pedidos</div>
        <div className="d-flex justify-content-lg-start">
          <div className="table-container">
            <table className="table-striped table table-hover pedidos-table">
              <thead className="table_header_fixed">
                <tr>
                  <th className="table_header_fixed pedidos-cel p-1 px-3">
                    Índice
                  </th>
                  <th className="table_header_fixed p-1 px-3">Cliente</th>
                  <th className="table_header_fixed  p-1 px-3">Pedido</th>
                  <th className="table_header_fixed  p-1 px-3">
                    Hora recepción
                  </th>
                  <th className="table_header_fixed  p-1 px-3">Hora entrega</th>
                  <th className="table_header_fixed  p-1 px-3">Estado</th>
                  <th className="table_header_fixed  p-1 px-3">Pago</th>
                  <th className="table_header_fixed  p-1 px-3">Repartidor</th>
                </tr>
              </thead>
              <tbody>
                <tr className="pedidos-row">
                  <td className="pedidos-cell text">1</td>
                  <td className="pedidos-cell text">Juan</td>
                  <td className="pedidos-cell text">Juan</td>
                  <td className="pedidos-cell text">Juan</td>
                  <td className="pedidos-cell text">Juan</td>
                  <td className="pedidos-cell text">Juan</td>
                  <td className="pedidos-cell text">Juan</td>
                  <td className="pedidos-cell text">Juan</td>
                </tr>
                <tr className="pedidos-row">
                  <td className="pedidos-cell text">1</td>
                  <td className="pedidos-cell text">Juan</td>
                  <td className="pedidos-cell text">Juan</td>
                  <td className="pedidos-cell text">Juan</td>
                  <td className="pedidos-cell text">Juan</td>
                  <td className="pedidos-cell text">Juan</td>
                  <td className="pedidos-cell text">Juan</td>
                  <td className="pedidos-cell text">Juan</td>
                </tr>
                <tr className="pedidos-row">
                  <td className="pedidos-cell text">1</td>
                  <td className="pedidos-cell text">Juan</td>
                  <td className="pedidos-cell text">Juan</td>
                  <td className="pedidos-cell text">Juan</td>
                  <td className="pedidos-cell text">Juan</td>
                  <td className="pedidos-cell text">Juan</td>
                  <td className="pedidos-cell text">Juan</td>
                  <td className="pedidos-cell text">Juan</td>
                </tr>
                <tr className="pedidos-row">
                  <td className="pedidos-cell text">1</td>
                  <td className="pedidos-cell text">Juan</td>
                  <td className="pedidos-cell text">Juan</td>
                  <td className="pedidos-cell text">Juan</td>
                  <td className="pedidos-cell text">Juan</td>
                  <td className="pedidos-cell text">Juan</td>
                  <td className="pedidos-cell text">Juan</td>
                  <td className="pedidos-cell text">Juan</td>
                </tr>
                <tr className="pedidos-row">
                  <td className="pedidos-cell text">1</td>
                  <td className="pedidos-cell text">Juan</td>
                  <td className="pedidos-cell text">Juan</td>
                  <td className="pedidos-cell text">Juan</td>
                  <td className="pedidos-cell text">Juan</td>
                  <td className="pedidos-cell text">Juan</td>
                  <td className="pedidos-cell text">Juan</td>
                  <td className="pedidos-cell text">Juan</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Acciones */}
      <div className="container">
        <div className="actions d-flex gap-3 justify-content-lg-start">
          <Btn2
            title="Registrar gasto"
            onClick={() => setShowModalGastos(true)}
          />
          <Btn2
            title="Actualizar clientes"
            onClick={() => setShowModalClientes(true)}
          />
        </div>
      </div>
      <ModalClientes
        show={showModalClientes}
        onHide={() => setShowModalClientes(false)}
      />
      <ModalGastos
        show={showModalGastos}
        onHide={() => setShowModalGastos(false)}
      />
    </div>
  );
};
