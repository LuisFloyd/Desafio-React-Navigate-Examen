import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, {useState, useEffect} from "react"
import Context from "./Context";
import Navbar from './components/Navbar';
import Home from './components/Home';
import DatosPizza from './components/DatosPizza'
import Carrito from './components/Carrito';

function App() {
  const endpoint = "/pizzas.json";
  const [pizzas, setPizzas] = useState([])
  const [carrito, setCarrito] = useState([])
  const [montoTotal, setMontoTotal] = useState(0)

  useEffect(()=>{
    cargarDatosIniciales()
  }, [])

  const cargarDatosIniciales = async () => {
    const response = await fetch(endpoint)
    const datos = await response.json()
    setPizzas(datos)
  }
  
  const calcularMontoTotal = () => {
    const recorreCarrito = carrito;
    let nuevoMonto = 0
    recorreCarrito.map((dato) => (nuevoMonto +=  dato.cantidad * dato.price))
    setMontoTotal(nuevoMonto)
  }
  
  useEffect(()=>{
    calcularMontoTotal()
  }, [carrito])

  const agregarAlCarrito = (id) => {
    const nuevoCarrito = [...carrito]
    const indexCarrito = nuevoCarrito.findIndex(dato => dato.id === id)

    if (indexCarrito >= 0) {
      nuevoCarrito[indexCarrito].cantidad += 1
      setCarrito(nuevoCarrito)
    } else {
        const recorrePizzas = [...pizzas]
        const indexPizza = recorrePizzas.findIndex(dato => dato.id === id)
        const nuevoItem = {
          id : id,
          img : recorrePizzas[indexPizza].img,
          name : recorrePizzas[indexPizza].name,
          price : recorrePizzas[indexPizza].price,
          cantidad: 1}
        setCarrito([...carrito, nuevoItem])
    }
  }

  const quitarUnoDelCarrito = (id) => {
    const nuevoCarrito = [...carrito]
    const indexCarrito = nuevoCarrito.findIndex(dato => dato.id === id)

    if (indexCarrito >= 0) {
      if (nuevoCarrito[indexCarrito].cantidad > 1){
        nuevoCarrito[indexCarrito].cantidad -= 1
        setCarrito(nuevoCarrito)
      }
      else {
        const quitarDelcarrito = nuevoCarrito.filter((dato) => dato.id !== id)
        setCarrito(quitarDelcarrito)
      }
    }
  }

  const globalState = { pizzas, agregarAlCarrito, quitarUnoDelCarrito, carrito, montoTotal };
  return (
    <div className="container">
      <Context.Provider value={globalState}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pizzas/:id" element={<DatosPizza />} />
            <Route path="/carrito" element={<Carrito />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

export default App;
