import {Link, NavLink} from 'react-router-dom'

import './Navbar.scss'
import logo from '../../../assets/header/logo.svg'

const Navbar = () => {
    return (
            <nav className="nav">
                {/* <Link to="/"><img src={logo} alt=""></img></Link> */}
                <ul>
                    <li><NavLink to="/duty" className="nav__duty">Дежурство</NavLink></li>
                    <li><NavLink to="/coworker" className="nav__coworker">Мои коллеги</NavLink></li>
                    <li><NavLink to="/comment" className="nav__comment">Комментарий</NavLink></li>
                    <li><NavLink to="/correction" className="nav__correction">Коррекция смены</NavLink></li>
                    {/* <li><Link to="/">test</Link></li>
                    <li><Link to="/">test</Link></li>
                    <li><Link to="/">test</Link></li>
                    <li><Link to="/">test</Link></li> */}
                </ul>
            </nav>
    )
}
export default Navbar;