import { Item } from "../Item/Item";
export const ItemList = ({ productos }) => {
    return (
        <>
            {productos.map(producto => <Item key = {producto.id} item={producto} />)}
        </>
    );
}

