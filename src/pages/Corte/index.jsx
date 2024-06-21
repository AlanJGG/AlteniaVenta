import { Header1 } from "components";
import { Btn0 } from "components";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { myConsole } from "@/utils/objects";

export const Corte = () => {
  return (
    <div>
      <Header1 goBack="/main-page" />
      <div className="d-flex justify-content-center w-100 p-4">
        <div className="w-100">
          <div className="flex items-center justify-between mb-6">
            <h1 className="d-flex justify-content-center">Corte de Caja</h1>
            <div className="d-flex justify-content-center mb-3">
              <Btn0 title="Generar recibo" />
              <Btn0 title="Finalizar venta" />
            </div>
          </div>
          <div className="corte-table-container d-flex justify-content-center rounded-top-4">
            <table className="table table-hover  mt-2 table-sm corte-table">
              <thead className="thead-dark corte-header">
                <tr>
                  <th>Artículo</th>
                  <th>Cantidad</th>
                  <th>Precio Unitario</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Producto 1</td>
                  <td>2</td>
                  <td>$10.00</td>
                  <td>$20.00</td>
                </tr>
                <tr>
                  <td>Producto 2</td>
                  <td>1</td>
                  <td>$15.00</td>
                  <td>$15.00</td>
                </tr>
                <tr>
                  <td>Producto 3</td>
                  <td>3</td>
                  <td>$8.00</td>
                  <td>$24.00</td>
                </tr>
                <tr>
                  <td>Producto 3</td>
                  <td>3</td>
                  <td>$8.00</td>
                  <td>$24.00</td>
                </tr>
                <tr>
                  <td>Producto 3</td>
                  <td>3</td>
                  <td>$8.00</td>
                  <td>$24.00</td>
                </tr>
                <tr>
                  <td>Producto 3</td>
                  <td>3</td>
                  <td>$8.00</td>
                  <td>$24.00</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="d-flex justify-content-end w-100 px-5">
            <div className="">
              <div className="d-flex gap-2">
                <span className="subtitle">Subtotal:</span>
                <span>$59.00</span>
              </div>
              <div className="d-flex gap-2">
                <span className="subtitle">Impuestos:</span>
                <span>$5.90</span>
              </div>
              <hr />
              <div className="d-flex gap-2">
                <span className="subtitle">Total:</span>
                <span className="subtitle">$64.90</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
