import logo from '/assets/logo.svg'
import cart from '/assets/icon-cart.svg'
import hamburger from '/assets/icon-menu.svg'
import closeSymbol from '/assets/icon-close.svg'
import '../styles/navbar.scss'
import { useCart } from '../hooks/useCart'
import Cart from './cart'
import MobileMenu from './mobilemenu'
import { useState } from 'react'

function Navbar(){


    const {showCart, getTotalQuantity } = useCart()
    const quantity = getTotalQuantity()
    const [menuShown, setMenuShown] = useState(false)

    const showMobileMenu = () =>{
        setMenuShown(!menuShown)
        document.body.classList.toggle('scroll-lock')
    }

    const showNavMenu= () =>{
        // document.body.classList.toggle('scroll-lock')

        showCart()
    }
return(
        
    <>
        <Cart/>
    <nav className="nav-bar"> 
            <div className="nav-holder">
                <div className="first-half-holder">
                <div className="logo-holder">
                    <img src={menuShown ? closeSymbol:hamburger} alt="" className="hamburger" onClick={showMobileMenu} />
                    <img src={logo} alt="" className="logo" />
                </div>
                <ul className="nav-list">
                    <li>Collections</li>
                    <li>Men </li>
                    <li>Women</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                </div>
                <div className="cart-holder" onClick={showNavMenu}>
                    <img src={cart} alt="" className="cart-image" />
                    <span className={`orange ${quantity>0? '':'hidden'}`}>{quantity}</span>
                </div>
            </div>
        </nav>
        <MobileMenu display={menuShown}/>
    </>)

}
export default Navbar;