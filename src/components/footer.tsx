import logo from '/assets/logo.svg'
import '../styles/footer.scss'
import twitterLogo from "/assets/icon-twitter.svg"
import facebookLogo from "/assets/icon-facebook.svg"
import instaLogo from "/assets/icon-instagram.svg"

function Footer(){
    return(<>
    <footer>
        <div className="nav-holder">
            <div className="logo-holder">
            <img src={logo} alt="" />
            
            </div>
            <ul className='nav-list'>
                <li>COLLECTIONS</li>
                <li>MEN</li>
            <li>WOMEN</li>
            <li>ABOUT</li>
            <li>CONTACT</li>

                </ul>
        </div>
        <div className="second-div">
            <div className="text-holder">
            <p className='copyright'>Copyright 2024. All Rights Reserved</p>
            </div>
            <div className="socials">
        <img src={facebookLogo} alt="facebook logo" />
            <img src={twitterLogo} alt="twitter logo" />
            <img src={instaLogo} alt="instagram logo" />
            
        </div>
        </div>
        
    </footer>
    </>)
}
export default Footer;