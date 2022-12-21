import "../assets/css/navbar.css";
import fotofondo from '../assets/img/fondo2.png'

export default function Fondo() {
  return (
    <div className="fondo text-center justify-content-center" style={{backgroundImage: `url(${fotofondo})`, backgroundRepeat: 'no-repeat'}}>
        <p className="tituloPrincipal">¡Pizzería Mamma Mía!</p>
        <p className="tituloSecundario">¡Tenemos las mejores pizzas que podrás encontrar!</p>
        <hr style={{margin: '0', color: 'white', height: '5px', width: '90%',  opacity: '60%'}}/><p>.</p>
    </div>
  );
}
