import React, { useState } from 'react'
import { Link } from 'react-router-dom'

//STYLE
import '../sass/components/Header.scss';

function Header() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <div className='header'>
            <div className="page-wrapper">
                <div className="header__lang">
                    <div className="header__lang-link">HU</div>
                    <div className="header__lang-link">SRB</div>
                </div>

                <Link to="/" className="header__logo" onClick={closeMobileMenu}>
                    <i className="fas fa-hamburger"></i> 
                    <h1>Luna Hamburgerija</h1>
                    <p>ADA</p>
                </Link>

                <div className="nav-icon desktop-hide" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>

                <div className="nav">
                    <ul className="nav__menu">
                        <li className="nav__menu__item">
                            <Link to='/' className='nav__menu__item-link' onClick={closeMobileMenu}>Főoldal</Link>
                        </li>
                        <li className="nav__menu__item">
                            <Link to='/menu' className='nav__menu__item-link' onClick={closeMobileMenu}>Étlap</Link>
                        </li>
                        <li className="nav__menu__item">
                            <Link to='/about-us' className='nav__menu__item-link' onClick={closeMobileMenu}>Rólunk</Link>
                        </li>
                        <li className="nav__menu__item">
                            <Link to='/contact' className='nav__menu__item-link' onClick={closeMobileMenu}>Kapcsolat</Link>
                        </li>
                    </ul>
                </div>

                <div className="header__info">
                    <div className="header__info-title">Telefon</div>
                    <a href="tel:+3811234567" className="header__info-link">+381 123-45-67</a>
                </div>
            </div>
        </div>
    )
}

export default Header
