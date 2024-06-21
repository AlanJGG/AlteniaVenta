import { Header1, Btn3 } from "components";
import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
// import { myConsole } from "@/utils/objects";

export const Inventario = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [inventory, setInventory] = useState([
    {
      id: 1,
      name: "Producto A",
      category: "Venta",
      stock: 50,
      min: 20,
      max: 100,
      price: 19.99,
    },
    {
      id: 2,
      name: "Refacción B",
      category: "Refacciones",
      stock: 25,
      min: 10,
      max: 50,
      price: 9.99,
    },
    {
      id: 3,
      name: "Producto C",
      category: "Venta",
      stock: 80,
      min: 30,
      max: 150,
      price: 29.99,
    },
    {
      id: 4,
      name: "Refacción D",
      category: "Refacciones",
      stock: 15,
      min: 5,
      max: 30,
      price: 14.99,
    },
  ]);

  const filteredInventory = useMemo(() => {
    if (selectedCategory === "all") {
      return inventory;
    } else {
      return inventory.filter((item) => item.category === selectedCategory);
    }
  }, [selectedCategory, inventory]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleInventoryChange = (item, type, value) => {
    const updatedInventory = inventory.map((i) => {
      if (i.id === item.id) {
        return { ...i, [type]: value };
      }
      return i;
    });
    setInventory(updatedInventory);
  };

  const generateReport = () => {
    console.log("Generando reporte...");
  };

  return (
    <div>
      <Header1 goBack="/main-page" />
      <div className="p-3">
        <h1 className="d-flex justify-content-center">Control de Inventario</h1>
        <div className="">
          <h2 className="d-flex justify-content-center">
            Filtrar por categoría
          </h2>
          <div className="mb-1">
            <Btn3
              title="Todos"
              onClick={() => handleCategoryChange("all")}
              classes={selectedCategory === "all" ? "btn3-after" : null}
            />
            <Btn3
              title="Productos"
              onClick={() => handleCategoryChange("Venta")}
              classes={selectedCategory === "Venta" ? "btn3-after" : null}
            />
            <Btn3
              title="Refacciones"
              onClick={() => handleCategoryChange("Refacciones")}
              classes={selectedCategory === "Refacciones" ? "btn3-after" : null}
            />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="table w-100">
            <thead>
              <tr className="">
                <th className="">Nombre</th>
                <th className="">Categoría</th>
                <th className="">Existencia</th>
                <th className="">Mínimo</th>
                <th className="">Máximo</th>
                <th className="">Precio</th>
                <th className="">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filteredInventory.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="">{item.name}</td>
                  <td className="">{item.category}</td>
                  <td className="">{item.stock}</td>
                  <td className="">
                    <input
                      type="number"
                      value={item.min}
                      onChange={(e) =>
                        handleInventoryChange(item, "min", e.target.value)
                      }
                    />
                  </td>
                  <td className="">
                    <input
                      type="number"
                      value={item.max}
                      onChange={(e) =>
                        handleInventoryChange(item, "max", e.target.value)
                      }
                    />
                  </td>
                  <td className="">${item.price.toFixed(2)}</td>
                  <td>
                    <Btn3 title="Entrada" classes="mx-1" />
                    <Btn3 title="Salida" classes="" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="">
          <Btn3 title="Generar Reporte" onClick={generateReport} />
        </div>
      </div>
    </div>
  );
};
