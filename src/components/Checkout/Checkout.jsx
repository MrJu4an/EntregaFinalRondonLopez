import { useRef } from "react";
import { useCarritoContext } from "../../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { createOrdenCompra, getProduct, updateProduct } from "../../firebase/firebase";
import { useForm } from 'react-hook-form';
//Validaciones formulario
import { toast } from "react-toastify";
import * as Yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup'
import { currencyFormatter } from "../../hooks/useFormatter";


export const Checkout = () => {

    //Validaciones formulario
    const formSchema = Yup.object().shape({
        name: Yup.string()
            .required('El nombre es requerido.')
            .min(3, 'El nombre debe tener al menos 3 caracteres.')
            .max(60, 'El nombre debe tener al menos 60 caracteres.'),
        email: Yup.string()
            .required('El campo es requerido.')
            .email('El email no tiene un formato valido.'),
        email2: Yup.string()
            .required('El email de confirmación es requerido.')
            .email('El email de confirmación no tiene un formato valido.')
            .oneOf([Yup.ref('email')], 'Los correos son distintos.'),
        dni: Yup.string()
            .required('El DNI es requerido.')
            .min(3, 'El DNI debe tener al menos 3 caracteres.'),
        celular: Yup.string()
            .required('El número de celular es requerido.')
            .min(9, 'El número de celular debe tener mínimo 9 caracteres.')
            .max(9, 'El número de celular debe tener máximo 9 caracteres.'),
        direccion: Yup.string()
            .required('La dirección es requerida.')
            .min(10, 'La dirección debe tener al menos 10 caracteres.')
    })

    const formOptions = {resolver: yupResolver(formSchema)}

    //Declaración de variables
    const datForm = useRef() //Crear referencia para consultar los valores del formulario
    const { carrito, totalPrice, emptyCart } = useCarritoContext()
    const { register, handleSubmit, formState: { errors } } = useForm(formOptions);
    let navigate = useNavigate() //Devuelve la localización actual

    const consultarFormulario = () => {
        //Consultar datos del formulario
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
            toast(` 🛒 Muchas gracias por comprar con nosotros, su ID de compra es ${ordenCompra.id} por un total de $ ${ currencyFormatter({ currency: "COP", value: totalPrice() }) } , en breve nos contactaremos para el envio`, {
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
            //e.target.reset();
            navigate("/") //Defino la ruta hacia donde queremos redirigir
        })
        .catch(error => {
            console.log(error)
        })

        //e.target.reset(); //reset form
    } 


    return (
        <>
            {
                carrito.length === 0 
                ?
                <>
                    <center>
                        <h1 className="mt-5">Para finalizar compra debe tener productos en el carrito</h1>
                        <Link className="nav-link mt-5" to={"/"}>
                            <button className="btn btn-primary">Continuar comprando</button>
                        </Link>
                    </center>
                    
                </>
                :
                <div className="container divForm">
                    <form onSubmit={handleSubmit(consultarFormulario)} ref={datForm}>
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label">Nombre y Apellido</label>
                            <input type="text" className="form-control" name="nombre" 
                                {...register("name")} >
                            </input>
                            {errors.name && <p role="alert" className="alert alert-danger fst-normal">{errors.name?.message}</p>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="text" className="form-control" name="email"
                                {...register("email")}>
                            </input>
                            {errors.email && <p role="alert" className="alert alert-danger fst-normal">{errors.email?.message}</p>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email2" className="form-label">Confirmar Email</label>
                            <input type="text" className="form-control" name="email2"
                                {...register("email2")}>         
                            </input>
                            {errors.email2 && <p role="alert" className="alert alert-danger fst-normal">{errors.email2?.message}</p>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="dni" className="form-label">DNI</label>
                            <input type="number" className="form-control" name="dni" 
                                {...register("dni")}>
                            </input>
                            {errors.dni && <p role="alert" className="alert alert-danger fst-normal">{errors.dni?.message}</p>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="celular" className="form-label">Número Telefónico</label>
                            <input type="number" className="form-control" name="celular" 
                                {...register("celular")}> 
                            </input>
                            {errors.celular && <p role="alert" className="alert alert-danger fst-normal">{errors.celular?.message}</p>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="direccion" className="form-label">Dirección</label>
                            <input type="text" className="form-control" name="direccion" 
                                {...register("direccion")}>
                            </input>
                            {errors.direccion && <p role="alert" className="alert alert-danger fst-normal">{errors.direccion?.message}</p>}
                        </div>
                        <button type="submit" className="btn btn-primary">Finalizar compra</button>
                    </form>
                </div>
            }
        </>
        
    );
}
