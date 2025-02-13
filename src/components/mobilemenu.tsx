import '../styles/mobilemenu.scss'

interface MobileProps {
    display:boolean;
}


const MobileMenu:React.FC<MobileProps> =({display}) =>{
    return(<>
    <nav className={`mobile-nav  ${display ? 'slide-right' : 'slide-left hidden'}`}>
       <ul className="mobile-nav-list">
       <li>Collections</li>
                    <li>Men </li>
                    <li>Women</li>
                    <li>About</li>
                    <li>Contact</li>
        </ul> 
    </nav>
    <div className={`blur-modal ${display ? 'fade-in' : 'fade-out hidden'}`} >

    </div>
    </>);
}
export default MobileMenu;