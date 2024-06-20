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
    <div className="">
      <Header1 goBack="/main-page"/>
      <h1 className="">Control de Inventario</h1>
      <div className="">
        <h2 className="">Filtrar por categoría</h2>
        <div className="">
          <Btn3
            variant={selectedCategory === "all" ? "primary" : "outline"}
            onClick={() => handleCategoryChange("all")}
          >
            Todos
          </Btn3>
          <Btn3
            variant={selectedCategory === "Venta" ? "primary" : "outline"}
            onClick={() => handleCategoryChange("Venta")}
          >
            Productos
          </Btn3>
          <Btn3
            variant={selectedCategory === "Refacciones" ? "primary" : "outline"}
            onClick={() => handleCategoryChange("Refacciones")}
          >
            Refacciones
          </Btn3>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full table-auto">
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
                <td className="">
                  <Btn3 variant="outline" size="sm">
                    Entrada
                  </Btn3>
                  <Btn3 variant="outline" size="sm" className="ml-2">
                    Salida
                  </Btn3>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="">
        <Btn3 onClick={generateReport}>Generar Reporte</Btn3>
      </div>
    </div>
  );
};
