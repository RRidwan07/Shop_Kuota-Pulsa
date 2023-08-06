import { IoIosMenu, } from "react-icons/io";
import {IoCloseSharp} from "react-icons/io5";
import {LOGO} from "../../img/img-kuota/Image";
import {Link} from "react-router-dom"
import '../../index1.css'

const Navbar = () => {
    return (
        <header className="head" id="head" style={{}} >
            <nav className="navbar" id="navbar">
                <input type="checkbox" id="check" />
                <label htmlFor="check">
                <IoIosMenu id="button"/>
                <IoCloseSharp  id="close"/>
                </label>

                <div className="title">
                    <img src={LOGO} alt=""/>
                </div>
                <div className="navbar-list">
                <ul className="list-ul">
                    <Link to={'/'} style={{textDecoration: 'none', color: 'black'}}>
                        <li className="nav-list">Home</li>
                    </Link>
                    <Link to={'/Pembayaran'} style={{textDecoration: 'none', color: 'black'}}>
                        <li className="nav-list">
                        Rekomendasi
                        </li>
                    </Link>
                    <Link style={{textDecoration: 'none', color: 'black'}}>
                        <li className="nav-list">
                        Contack
                        </li>
                    </Link>
                        <a href="https://wa.link/tvng59">
                        <button className="button-btn">Pesan Sekarang</button>
                        </a>
                </ul>
                </div>
            </nav>
        </header>
     );
}
export default Navbar;

