import { Link } from "react-router-dom";
import { memo } from "react";
export const Categorias = memo(() => {
    return (
        <ul>
            <li className="nav-item">
                <Link className="nav-link" to={"/"}>
                    <button className="btn btn-dark" title="Inicio"><i className="fas fa-home fa-lg"></i></button>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={"/category/procesadores"}>
                    <button className="btn btn-dark" title="Procesadores"><li className="fas fa-microchip fa-lg"></li></button>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={"/category/tarjetas-video"}>
                    <button className="btn btn-dark" title="Tarjetas de Video"><li className="fas fa-stream fa-lg"></li></button>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={"/category/memorias-ram"}>
                    <button className="btn btn-dark" title="Memorias Ram"><li className="fas fa-memory fa-lg"></li></button>
                </Link>
            </li>
        </ul>
    );
})
