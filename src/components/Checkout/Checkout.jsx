import { useRef } from "react";
export const Checkout = () => {
    const datForm = useRef() //Crear referencia para consultar los valores del formulario
    const consultarFormulario = (e) => {
        //Consultar datos del formulario
        e.preventDefault()
        const datosFormulario = new FormData(datForm.current) //Pasar HTML a objeto iterable
        const cliente = Object.fromEntries(datosFormulario) //Pasar de objeto iterables a objeto simple
        console.log(cliente)
    } 
    return (
        <div className="container divForm">
            <form onSubmit={consultarFormulario} ref={datForm}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre y Apellido</label>
                    <input type="text" className="form-control" name="nombre"></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="text" className="form-control" name="email"></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="email2" className="form-label">Confirmar Email</label>
                    <input type="text" className="form-control" name="email2"></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="dni" className="form-label">DNI</label>
                    <input type="number" className="form-control" name="dni"></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="celular" className="form-label">Número Telefónico</label>
                    <input type="number" className="form-control" name="celular"></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="direccion" className="form-label">Dirección</label>
                    <input type="text" className="form-control" name="direccion"></input>
                </div>
                <button type="submit" className="btn btn-primary">Finalizar compra</button>
            </form>
        </div>
    );
}
