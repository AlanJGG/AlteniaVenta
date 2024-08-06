import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import KeyIcon from "@mui/icons-material/Key";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Btn0 } from "components";
import { getAllProducts, createCorte } from "services";
import { finishCorte } from "services";
import { createProduct } from "services";
import { getAllGastos } from "services";

// import { myConsole } from "@/utils/objects";

export const Home = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]); // Estado para almacenar los productos
  const [yes, setYes] = useState(false);
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
    // const res = await createCorte();
    // const res = await finishCorte(1000.0, 1);
    setYes(true);
    // console.log(res);
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
            {yes ? products[0].nombre_pro : "NO"}
            <Btn0 title="Ingresar" onClick={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};
