import { useCount } from "../../hooks/useCount";

export const ItemCount = ({valInicial, min, max, onAdd}) => {
    
    const {count, sum, minus, reset} = useCount(valInicial, min, max)
    return (
        <div>
            <button className="btn btn-primary" onClick={minus}>-</button>
            {count}
            <button className="btn btn-primary" onClick={sum}>+</button>
            <br />
            <br />
            <button className="btn btn-dark" onClick={() => onAdd(count)}>Agregar al Carrito</button>&nbsp;
            <button className="btn btn-secondary" onClick={reset}>Reset</button>
        </div>
    );
}
