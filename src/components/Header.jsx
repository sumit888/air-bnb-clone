import logo from "../assets/air-bnb-logo.png"

function Header(){
    return(
        <div className="container">
            <nav>
                <img src={logo} alt="air-bnb logo" className="nav--logo"/>
            </nav>
        </div>
    );
}

export default Header