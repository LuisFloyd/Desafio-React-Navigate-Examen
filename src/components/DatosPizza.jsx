import { useParams } from "react-router-dom";
import Context from "../Context";
import React, {useContext} from "react"
import '../assets/css/catalogoPizzas.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default function DatosPizza() {
    const {id} = useParams();
    const { pizzas, agregarAlCarrito } = useContext(Context);
    const pizza = pizzas.filter(el => el.id === id)
    return (
    <div className='container m-3'>
        {pizza.map((dato) => (  
            <div    key={dato.id}
                    className="container d-flex"
                >
                <img className="ms-auto img-fluid" src={dato.img} alt="foto pizza" style={{width: '25rem', height: 'auto'}}/>
                <div className="mx-auto p-3 border">
                    <h3>{dato.name}</h3>                    
                    <hr style={{margin: '0', color: 'black', height: '2px', width: '100%',  opacity: '10%'}}/>
                    <Card.Text>
                        {dato.desc}                        
                        <h4 className="mt-4 ">Ingredientes:</h4>
                        <div className="m-3">
                            {dato.ingredients.map((e)=>(<p className="m-0"  key={Math.random()}>🍕{e}</p>))}
                        </div>
                        <div className="d-flex">
                            <h3>Precio: ${dato.price}</h3> 
                            <Button variant="danger" className="ms-auto "
                                    onClick={() => (agregarAlCarrito(dato.id))}
                            >Añadir 🛒</Button>{' '}
                        </div>
                    </Card.Text>                    
                </div>
            </div>
        ))
        }
    </div>
  );
}



