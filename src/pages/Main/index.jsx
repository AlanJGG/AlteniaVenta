import { Btn1, Header1 } from "components";
// import { myConsole } from "@/utils/objects";

export const Main = () => {
  return (
    <div>
      <Header1 goBack="/home" />
      <div className="pt-5">
        <div className="w-100 d-flex justify-content-center btn-container mt-5">
          <Btn1 title="Venta" route="/venta" />
          <Btn1 title="Inventario" route="/inventario" />
          <Btn1 title="Corte" route="/corte" />
        </div>
        <div className="w-100 d-flex justify-content-center btn-container mt-5">
          <Btn1 title="Repartidores" route="/repartidores"/>
          <Btn1 title="Clientes" route="/clientes"/>
        </div>
      </div>
    </div>
  );
};
