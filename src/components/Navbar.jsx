import React from 'react'
import logo1 from '../images/logos/logo1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget'

const Navbar = () => {
  return (
    <nav className='Nav'>
      <div className='Navbar'>
        <Link to='/'><img className='logo' src={logo1} alt="Logo" /></Link>
        {/* <a className="item menu" href='#'><FontAwesomeIcon icon={faBars} /> Menú</a>        */}
        <div className='link'>
          <Link className='item inicio' to='/inicio'>Inicio</Link>
          <Link className='item nosotros' to='/nosotros'>Nosotros</Link>
          <Link className='item contacto' to='/contacto'>Contacto</Link>
        </div>
        <div className="redes">
          <a className="item whatsapp" href='https://api.whatsapp.com/send?phone=51982032585&text=%F0%9F%91%8B%20%C2%A1Hola!%20Este%20es%20un%20ejemplo%20de%20un%20mensaje%20de%20prueba.%20%F0%9F%99%82' target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faWhatsapp} /></a>
          <a className="item instagram" href='https://www.instagram.com/p/C_7BeXfstIHfYxe1ZEdXpTNMh8FwuiZA2epidQ0/?igsh=MTgxYm5sanZ5MWNoeg==' target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
          <a className="item tiktok" href='https://www.tiktok.com/@kyoostore23?is_from_webapp=1&sender_device=pc' target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faTiktok} /></a>
        </div>
        <Link><CartWidget /></Link>
      </div>
      <div className='categorias'>
        <Link className='item polos' to='/inicio/Polo'>Polos</Link>
        <Link className='item oversize' to='/inicio/Oversize'>Oversize</ Link>
        <Link className='item poleras' to='/inicio/Polera'>Poleras</Link>
        {/* <Link className='item hombre' to='/inicio/hombre'>Hombre</ Link> */}
        {/* <Link className='item mujer' to='/inicio/mujer'>Mujer</Link> */}
      </div>
    </nav>
  )
}

export default Navbar;