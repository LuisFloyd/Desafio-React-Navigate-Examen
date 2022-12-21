import Context from "../Context";
import React, {useContext} from "react"
import '../assets/css/catalogoPizzas.css'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button'

export default function Pizzas() {
    const { pizzas, agregarAlCarrito } = useContext(Context);
    const navigate = useNavigate();
    const verDatosPizza = (id) =>{
    navigate(`/pizzas/${id}`);
    }
    return (
    <>
        <div className="galeria grid-columns-4 p-3">
        {pizzas.map((dato) => ( <div   key={dato.id}
                                        >
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={dato.img}/>
                                        <Card.Body>
                                            <Card.Title>{dato.name}</Card.Title>
                                            <hr style={{margin: '0', color: 'black', height: '5px', width: '100%',  opacity: '30%'}}/>
                                            <h5 className="mt-1 ">Ingredientes:</h5>
                                            <div className="m-3">
                                                {dato.ingredients.map((e)=>(<p className="m-0"  key={Math.random()}>🍕{e}</p>))}
                                            </div>
                                        </Card.Body>
                                        <ListGroup className="list-group-flush text-center">
                                            <ListGroup.Item> 
                                                <h3>${dato.price}</h3>
                                                <div className="m-2 d-flex" >
                                                    <Button className="bg-info" 
                                                            onClick={() => (verDatosPizza(dato.id))}
                                                        >Ver Más 👀
                                                    </Button>
                                                    <Button className="bg-danger ms-4"
                                                            onClick={() => (agregarAlCarrito(dato.id))}
                                                        >Añadir 🛒
                                                    </Button>
                                                </div>                                        
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Card>
                                </div>
                                ))}
        </div>
    </>

  );
}



