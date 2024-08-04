import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import KeyIcon from "@mui/icons-material/Key";

import { Btn1 } from "components";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Btn0 } from "components";
import { getAllProducts, createProduct } from "services";

// import { myConsole } from "@/utils/objects";

export const Home = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]); // Estado para almacenar los productos
  const fetchProducts = async () => {
    try {
      const productsData = await getAllProducts(); // Espera la respuesta de la API
      setProducts(productsData); // Guarda los productos en el estado
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSubmit = async () => {
    const createdProduct = await createProduct({ nombre_pro: "pENDEJA" });
    console.log("Producto creado: ", createdProduct);
    fetchProducts();
    console.log(products);
  };

  useEffect(() => {
    // myConsole.log("Hola")
  }, []);

  return (
    <div className="d-flex justify-content-center">
      <div className="mt-5">
        <div className="d-flex justify-content-center">
          <h1 className="title">AlteniaVenta</h1>
        </div>
        <div className="d-block justify-content-center mt-5">
          <h2 className="subtitle">Ingresa con tu usuario y contraseña</h2>

          <div className="d-flex justify-content-center mt-3">
            <TextField
              color="secondary"
              label="Usuario"
              // error
              variant="filled"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div className="d-flex justify-content-center mt-3">
            <TextField
              color="secondary"
              label="Contraseña"
              // error
              variant="filled"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <KeyIcon />
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div className="d-flex justify-content-center mt-3">
            <Btn0 title="Ingresar" onClick={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};
