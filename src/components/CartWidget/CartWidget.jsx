import './CartWidget.css';

export const CardWidget = ({cantCarrito}) => {
    return (
        <>
            <p className='fs-5 count'>{cantCarrito}</p>
            <button className="btn btn-dark"><i className="fas fa-shopping-cart fa-lg"></i></button>
        </>
            
    );
}
