import { useCarritoContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { ItemList } from "../ItemList/ItemList";
export const Cart = () => {
    const {carrito, emptyCart} = useCarritoContext()
    return (
        <div>
            <>

                {
                    carrito.length === 0 ?
                        <>
                            <center>
                                <h1 className="mt-5">Carrito vacio</h1>
                                <button className="btn btn-primary mt-5"><Link to={"/"} className="nav-link">Continuar comprando</Link></button>
                            </center>
                                                 
                        </>
                    :
                        <>
                            <div className="container cartContainer">
                                {<ItemList productos={carrito} plantilla={"ItemCart"} />}
                                <div className="cartButtons">
                                    <button className="btn btn-danger" style={{float: "left"}} onClick={() => emptyCart()}>Vaciar carrito</button>
                                    <Link className="nav-link" to={"/"} style={{float: "left"}}>
                                        &nbsp;<button className="btn btn-dark">Continuar comprando</button>&nbsp;
                                    </Link>
                                    <Link className="nav-link" to={"/checkout"} style={{float: "left"}}>
                                        <button className="btn btn-primary">Finalizar compra</button>
                                    </Link>
                                </div>
                            </div>
                        </>
                }

            </>
        </div>
    );
}