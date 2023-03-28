import cart from './assets/cart.png'
import './CartWidget.css';

export const CardWidget = () => {
    return (
        <>
            <p className='fs-5'><b className='count'>0</b></p>
            <img className="cart" src={cart} alt="cart-widget"></img>
        </>
            
    );
}
