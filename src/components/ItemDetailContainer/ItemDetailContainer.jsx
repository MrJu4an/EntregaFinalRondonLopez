//consulto un unico producto de mi BDD
import { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getProduct } from "../../firebase/firebase";
//import { getProductById } from "../../hooks/asyncMock";

export const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    const {id} = useParams()
    useEffect(() =>{
        getProduct(id)
        .then(prod => setItem(prod))

        //Se comenta ya que se empieza a consultar por base de datos FireBase
        // getProductById(id)
        // .then(response => {
        //     setItem(response)
        // })
        // .catch(error => {
        //     console.log(error)
        // })

        // fetch('../json/productos.json')
        // .then(response => response.json())
        // .then(productos => {
        //     const prod = productos.find(prod => prod.id === parseInt(id))
        //     setItem(prod)
        // })
    }, [])
    return (
        <div className="card mb-3 container itemDetail">
            <ItemDetail item={item} />            
        </div>
    );
}
