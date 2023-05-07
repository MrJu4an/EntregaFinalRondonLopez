import './ItemListContainer.css';
import { ItemList } from '../ItemList/ItemList.jsx';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../../firebase/firebase';
//Se comenta ya que se empiezan a traer los productos desde la base de datos de FireBase
//import { getProducts, getProductsByCategory } from '../../hooks/asyncMock';

export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const {category} = useParams()

    useEffect(() => {
        if(category){
            getProducts()
            .then(productos => {
                const productosFiltrados = productos.filter(prod => prod.stock > 0).filter(prod => prod.idCategoria === category)
                setProductos(productosFiltrados)
            })
        } else {
            getProducts()
            .then(productos => {
                const productosFiltrados = productos.filter(prod => prod.stock > 0)
                setProductos(productosFiltrados)
            })
            
        }
    })

    return (
        <div className="row justify-content-center p-4">
            <h1 className='Titulo'>Bienvenido</h1>
            {<ItemList productos={productos} plantilla={"Item"} />}
        </div>
    );


    //Metodos anteriores de consultas de datos
    //const {darkMode} = useDarkModeContext()

    // useEffect(() => {
    //     if(category){ //Se consulta si ingresaron un parametro en la url
    //         fetch('../json/productos.json')
    //         .then(response => response.json())
    //         .then(productos => {
    //             const productosFiltrados = productos
    //                                         .filter(prod => prod.stock > 0)
    //                                         .filter(prod => prod.idCategoria === category)
    //             setProductos(productosFiltrados)
    
    //         })
    //     } else{
    //         fetch('./json/productos.json')
    //         .then(response => response.json())
    //         .then(productos => {
    //             const productosFiltrados = productos.filter(prod => prod.stock > 0)
    //             setProductos(productosFiltrados)
    //         })
    //     }
    // }, [category]) //Cada vez que se modifica la categoria se ejecuta el código

    // useEffect(() => {
    //     const asyncFunc = category ? getProductsByCategory : getProducts

    //     asyncFunc(category)
    //         .then(response => {
    //             setProductos(response)
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    //     // if(category){
    //     //     getProductsByCategory(category)
    //     //         .then(response => {
    //     //             setProductos(response)
    //     //         })
    //     //         .catch(error => {
    //     //             console.log(error)
    //     //         })
    //     // } else{
    //     //     getProducts()
    //     //         .then(response => {
    //     //             setProductos(response)
    //     //         })
    //     //         .catch(error => {
    //     //             console.log(error)
    //     //         })
    //     // }
    // })

    // return (
    //     <div className="row">
    //         <h1 className='Titulo'>Bienvenido</h1>
    //         {<ItemList productos={productos} plantilla={"Item"} />}
    //     </div>
    // );
}

