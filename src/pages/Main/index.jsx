import { Btn1, Header1 } from "components";
// import { myConsole } from "@/utils/objects";

export const Main = () => {
  return (
    <div>
      <Header1 goBack="/home" />
      <div className="d-flex justify-content-center">
        <div className="btn-container">
          <Btn1 title="Venta" route="/venta" />
          <Btn1 title="Inventario" route="/inventario" />
          <Btn1 title="Corte" route="/corte" />
        </div>
      </div>
    </div>
  );
};
