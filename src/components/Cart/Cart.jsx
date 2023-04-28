import { useCarritoContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { ItemList } from "../ItemList/ItemList";
export const Cart = () => {
    const {carrito, totalPrice, emptyCart} = useCarritoContext()
    return (
        <div>
            <>

                {
                    carrito.length === 0 ?
                        <>
                            <h1>Carrito vacio</h1>
                            <button className="btn btn-primary"><Link to={"/"} className="nav-link">Continuar comprando</Link></button>                     
                        </>
                    :
                        <>
                            <div className="container cartContainer">
                                {<ItemList productos={carrito} plantilla={"ItemCart"} />}
                                <div className="cartButtons">
                                    <button className="btn btn-danger" onClick={() => emptyCart()}>Vaciar carrito</button>
                                    <br />
                                    <br />
                                    <Link className="nav-link" to={"/"}>
                                        <button className="btn btn-dark">Continuar comprando</button>
                                    </Link>
                                    <br />
                                    <Link className="nav-link" to={"/checkout"}>
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