import './ItemListContainer.css';
import { ItemList } from '../ItemList/ItemList.jsx';
import { useState, useEffect } from 'react';

const BDD = [{
    "id": 1,
    "idCategoria": 1,
    "nombre": "NVIDIA-3060",
    "marca": "EVGA",
    "modelo": "3060",
    "precio": 3500000,
    "stock": 30,
    "img": "img/nvidia-3060.jpg"
},
{
    "id": 2,
    "idCategoria": 2,
    "nombre": "Ryzen 5 5600",
    "marca": "AMD",
    "modelo": "5600",
    "precio": 700000,
    "stock": 30,
    "img": "img/ryzen5-5600.jpg"
},
{
    "id": 3,
    "idCategoria": 3,
    "nombre": "RAM 16GB / 2x8 ",
    "marca": "TForce",
    "modelo": "DRR4",
    "precio": 400000,
    "stock": 30,
    "img": "img/ram-tforce.jpg"
}]
export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        const promesa = () => new Promise((resolve, reject) => {
            if(true){
                resolve(BDD)
            }
            reject("No posee los permisos necesarios ")
        })

        promesa()
        .then(productos => {
            const productosFiltrados = productos.filter(prod => prod.stock > 0)
            const items = <ItemList productos={ productosFiltrados } />
            setProductos(items)
            console.log(items)
        })
        .catch(error => console.error(error))
    }, [])

    return (
        <div className="row">
            <h1 className='Titulo'>Bienvenido</h1>
            {productos}
        </div>
    );
}

