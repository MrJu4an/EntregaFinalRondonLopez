import './Navbar.css';
import { Categorias } from './Categorias/Categorias';
import { CardWidget } from '../CartWidget/CartWidget';
import logo from './assets/logo-idevs.png'
import { Link } from 'react-router-dom';
import { BotonDarkMode } from './BotonDarkMode/botonDarkMode';
export const Navbar = () => {
    return(
            <div className="container-fluid">
                <div className='row'>
                    <nav className="navbar navbar-dark bg-dark">
                        <div className="container-fluid">
                            <div className='col-2'>
                                <Link className='nav-bar brand' to={`/`}>
                                    <img className='m-2 logo' src={logo} alt=''></img>
                                    <button className='btn btn-dark'>iDevs</button>
                                </Link>
                            </div>
                            <div className='col-8'>
                                <Categorias />
                            </div>
                            <div className='col-2'>
                                <ul>
                                <CardWidget />
                                <BotonDarkMode />
                                </ul>
                            </div>                    
                        </div>
                    </nav>
                </div>
            </div>
    )
}