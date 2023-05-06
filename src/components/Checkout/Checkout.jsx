import { useRef } from "react";
import { useCarritoContext } from "../../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { createOrdenCompra, getProduct, updateProduct } from "../../firebase/firebase";
import { toast } from "react-toastify";
export const Checkout = () => {
    const datForm = useRef() //Crear referencia para consultar los valores del formulario
    const { carrito, totalPrice, emptyCart } = useCarritoContext()

    let navigate = useNavigate() //Devuelve la localización actual
    const consultarFormulario = (e) => {
        //Consultar datos del formulario
        e.preventDefault()
        const datosFormulario = new FormData(datForm.current) //Pasar HTML a objeto iterable
        const cliente = Object.fromEntries(datosFormulario) //Pasar de objeto iterables a objeto simple

        const aux = [...carrito]
        //Recorrer el carrito y descontar el stock
        aux.forEach(prodCarrito => {
            getProduct(prodCarrito.id)
                .then(prodBBD => {
                    if(prodBBD.stock >= prodCarrito.quantity){ //Si el stock de mi producto en la BDD es mayor o igual a la cantidad que el cliente quiere comprar, descuento el stock
                        prodBBD.stock -= prodCarrito.quantity
                        updateProduct(prodBBD.id, prodBBD)
                    } else {
                        //console.log("El stock no es mayor o igual a la cantidad que se quiere comprar")
                        toast(`⚡ El stock no es mayor o igual a la cantidad que se quiere comprar`, {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                        });
                    }
                })
        })

        const aux2  = aux.map(prod => ({id: prod.id, quantity: prod.quantity, precio: prod.precio}))
        createOrdenCompra(cliente, totalPrice(), aux2, new Date().toLocaleString('es-CO', {timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone}))
        .then(ordenCompra => {
            //console.log(`Muchas gracias por comprar con nosotros, su ID de compra es ${ordenCompra.id} por un total de ${totalPrice()}, en breve nos contactaremos para el envio.`)
            toast(` 🛒 Muchas gracias por comprar con nosotros, su ID de compra es ${ordenCompra.id} por un total de $ ${totalPrice()} COP, en breve nos contactaremos para el envio`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            emptyCart()
            e.target.reset();
            navigate("/") //Defino la ruta hacia donde queremos redirigir
        })
        .catch(error => {
            console.log(error)
        })

        e.target.reset(); //reset form
    } 
    return (
        <>
            {
                carrito.length === 0 
                ?
                <>
                    <h2>Para finalizar compra debe tener productos en el carrito</h2>
                    <Link className="nav-link" to={"/"}>
                        <button className="btn btn-primary">Continuar comprando</button>
                    </Link>
                </>
                :
                <div className="container divForm">
                    <form onSubmit={consultarFormulario} ref={datForm}>
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label">Nombre y Apellido</label>
                            <input type="text" className="form-control" name="nombre" required></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="text" className="form-control" name="email" required></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email2" className="form-label">Confirmar Email</label>
                            <input type="text" className="form-control" name="email2" required></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="dni" className="form-label">DNI</label>
                            <input type="number" className="form-control" name="dni" required></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="celular" className="form-label">Número Telefónico</label>
                            <input type="number" className="form-control" name="celular" required></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="direccion" className="form-label">Dirección</label>
                            <input type="text" className="form-control" name="direccion" required></input>
                        </div>
                        <button type="submit" className="btn btn-primary">Finalizar compra</button>
                    </form>
                </div>
            }
        </>
        
    );
}
