const { Header1, Btn3 } = require("components");

export const Repartidores = () => {
  return (
    <div>
      <Header1 goBack="/main-page" />
      <div>
        <h1 className="d-flex justify-content-center mt-4   ">Repartidores</h1>
        <div className="w-100 d-flex justify-content-center repartidores-table-container mt-4">
          <table className="table table-hover table-sm w-50 repartidores-table">
            <thead className="thead-dark repartidores-header">
              <tr>
                <th>Repartidor</th>
                <th>Total</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Feliciano</td>
                <td>$1980</td>
                <td className="d-flex justify-content-center">
                  <Btn3 title="Desglose" classes="mx-1" />
                  <Btn3 title="Corte" classes="" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
