import { Link } from "react-router-dom";
import Context from "../Context";
import {useContext} from "react"

export default function Navbar() {
  const { montoTotal } = useContext(Context);

  return (
    <nav className="navbar" >
    <Link to="/">🍕 Pizzería Mamma Mía! </Link>  <Link to="/carrito"> <span className="carrito">🛒</span>  ${montoTotal}</Link>
    </nav>
  );
}
