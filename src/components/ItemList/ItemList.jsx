import { Item } from "../Item/Item";
import { ItemCart } from "../ItemCart/ItemCart";
export const ItemList = ({ productos , plantilla}) => {
    return (
        <>
            {
                plantilla === "Item" 
                ? 
                productos.map(producto => <Item key = {producto.id} item={producto} />)
                :
                productos.map(producto => <ItemCart key = {producto.id} item={producto} />)
            }
            
        </>
    );
}

