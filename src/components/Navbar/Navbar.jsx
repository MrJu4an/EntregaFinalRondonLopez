import './Navbar.css';
import { CardWidget } from '../CartWidget/CartWidget';
import logo from './assets/logo-idevs.png'
export const Navbar = () => {
    return(
            <div className="container-fluid">
                <div className='row'>
                    <nav className="navbar navbar-dark bg-dark">
                        <div className="container-fluid">
                            <div className='col-2'>
                                <a className="navbar-brand" href="#">
                                    <img className='m-2 logo' src={logo} alt=''></img>
                                    iDevS
                                </a>
                            </div>
                            <div className='col-8'>
                                <ul>
                                    <li className="nav-item">
                                    <h3><a className="nav-link active" aria-current="page" href="#">Procesadores</a></h3>
                                    </li>
                                    <li className="nav-item">
                                    <h3><a className="nav-link" href="#">Tarjetas de Video</a></h3>
                                    </li>
                                    <li className="nav-item">
                                    <h3><a className="nav-link" href="#">Teclados</a></h3>
                                    </li>
                                    <li className="nav-item">
                                    <h3><a className="nav-link" href="#">Blog</a></h3>
                                    </li>
                                </ul>
                            </div>
                            <div className='col-2'>
                                <ul>
                                <CardWidget />
                                </ul>
                            </div>                    
                        </div>
                    </nav>
                </div>
            </div>
    )
}