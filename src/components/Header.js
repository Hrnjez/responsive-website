import logo from '../img/logo.svg'

const Header = () => {
    return (
        <div className='header'>
            <div class="entire-menu">
                <input type="checkbox" id="change-hamburguer" />
                <a class="hamburguer" href="#">
                    <span></span>
                    <label for="change-hamburguer"></label>
                </a>
                <div class="menu">
                    <a href="/">Customer</a>
                    <a href="/">Solutions</a>
                    <a href="/">Partners</a>
                    <a href="/">About Us</a>
                    <a href="/" className='get-the-app'>Log In</a>
                    <a href="/" className='lang'>France &nbsp;<i className="fas fa-angle-down"></i></a>
                    <a href="/" className='lang lang-border'>EN &nbsp;<i className="fas fa-angle-down"></i></a>
                </div>
            </div>
            
            <div className='logo'>
                <img src={logo} alt="Loiva Logo"/>
            </div>
            <div className='desktop-nav'>
                <ul>
                    <li>Customers</li>
                    <li>Solutions</li>
                    <li>Partners</li>
                    <li>About Us</li>
                    <li className='get-the-app'>Log In</li>
                    <li className='lang'>France &nbsp;<i class="fas fa-angle-down"></i></li>
                    <li className='lang'>EN &nbsp;<i class="fas fa-angle-down"></i></li>
                </ul>
            </div>
            
        </div>
    )
}

export default Header
