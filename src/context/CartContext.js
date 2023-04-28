import { useState,createContext, useContext } from "react";

const CarritoContext = createContext();

export const useCarritoContext = () => useContext(CarritoContext);

export const CarritoProvider = (props) => {

    const [carrito, setCarrito] = useState([])

    //Agregar producto - Quitar producto - Vaciar carrito - Obtener cantidad - Obtener precio total
    const isInCart = (id) => {
        //Find => Obj - Some => Booleano
        return carrito.some(prod => prod.id === id) //V o F
    }

    const addItem = (item, quantity) => {
        if(isInCart(item.id)){ //Consulto si el producto existe en el carrito
            //Consulto y seteo la cantidad en el carrito
            const indice = carrito.findIndex(prod => prod.id === item.id)
            const aux = [...carrito]
            aux[indice].quatity = quantity 
            setCarrito(aux)
        } else {
            //Creo un nuevo objeto con los datos ingresados
            const newItem = {
                ...item,
                quantity //Si agrego directamente el parametro queda con el mismo nombre 
            }
            //Genero un aux que es igual al carrito para poder hacer el push
            /*
            const aux = carrito
            aux.push(newItem)
            setCarrito(aux)
            */
           setCarrito([...carrito, newItem]) //Genero una copia del carrito más el nuevo item
        }
    }

    const removeItem = (id) => {
        /*
        const aux = [...carrito]
        const indice = aux.findIndex(prod => prod.id === id)
        setCarrito(aux.splice(indice, 1))
        */
        //Traeme todo los productos que no tengan el id ingresado
        setCarrito(carrito.filter(prod => prod.id !== id))
    }

    const emptyCart = () => {
        setCarrito([])
    }

    const getItemQuantity = () => {
        //Devuelvo la cantidad de productos en mi carrito
        return carrito.reduce((acum, prod) => acum += prod.quantity, 0)
    }

    const totalPrice = () => {
        return carrito.reduce((acum, prod) => acum += (prod.quantity * prod.price), 0)
    }

    console.log(carrito)

    return (
        <CarritoContext.Provider value = {{carrito, addItem, removeItem, emptyCart, totalPrice, getItemQuantity }} >
            {props.children}
        </CarritoContext.Provider>
    )
}