import './ItemListContainer.css';
import { ItemList } from '../ItemList/ItemList.jsx';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts, getProductsByCategory } from '../../hooks/asyncMock';

export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const {category} = useParams()

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

    useEffect(() => {
        if(category){
            getProductsByCategory(category)
                .then(response => {
                    setProductos(response)
                })
                .catch(error => {
                    console.log(error)
                })
        } else{
            getProducts()
                .then(response => {
                    setProductos(response)
                })
                .catch(error => {
                    console.log(error)
                })
        }
    })

    return (
        <div className="row">
            <h1 className='Titulo'>Bienvenido</h1>
            {<ItemList productos={productos} />}
        </div>
    );
}

