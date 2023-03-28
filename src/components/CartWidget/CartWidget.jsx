import cart from './assets/cart.png'
import './CartWidget.css';

export const CardWidget = () => {
    return (
        <>
            <img className="cart" src={cart} alt="cart-widget"></img>
            <b className='count'>0</b>
        </>
            
    );
}
