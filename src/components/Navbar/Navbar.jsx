import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import { CardWidget } from '../CartWidget/CartWidget';
import logo from './assets/logo-idevs.png'
export const Navbar = () => {
    return(
        <>
            <nav className="navbar navbar-dark bg-dark">
             <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img className='logo' src={logo} alt=''></img>
                    iDevS
                </a>
                <ul>
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Procesadores</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Tarjetas de Video</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Teclados</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Blog</a>
                    </li>
                </ul>
                <ul>
                    <CardWidget />
                </ul>
                
                </div>
            </nav>
        </>
    )
}