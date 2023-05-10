import { Link } from "react-router-dom";
import { currencyFormatter } from "../../hooks/useFormatter";
export const Item = ({ item }) => {
    return (
        <>
            <div className="card m-3" style={{width: '20rem'}}>
                <img src={item.img} className="card-img-top" alt={`Imagen de ${item.nombre}`} />
                <div className="card-body">
                    <h5 className="card-title">{item.nombre}</h5>
                    <p className="card-text">Marca: {item.marca}</p>
                    <p className="card-text">Precio: ${ currencyFormatter({currency: "COP", value: item.precio}) }</p>
                    <p className="card-text">Stock: {item.stock}</p>
                    <Link className="nav-link" to={`/product/${item.id}`}><button className="btn btn-primary">Ver</button></Link>
                </div>
            </div>
        </>
    );
}

