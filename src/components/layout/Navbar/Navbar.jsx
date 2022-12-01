import { useDispatch, useSelector } from 'react-redux'
import {NavLink} from 'react-router-dom'

import { closeBurger } from '../../../actions'

import './Navbar.scss'
// import logo from '../../../assets/img/nav/logo.svg'

const Navbar = () => {

    const dispatch = useDispatch()
    const {burgerIsOpen} = useSelector(state => state.burger)

    let defaultClass = 'nav'
    if(burgerIsOpen === true ) {
        defaultClass += ' nav-active'
    }

    return (
            <nav className={defaultClass}>
                <ul>
                    <li><NavLink style={({isActive}) => ({color: isActive ? '#E2E2E2' : '#929292'})} to="/duty" className="nav__duty" onClick={() => dispatch(closeBurger())}>Дежурство</NavLink></li>
                    <li><NavLink style={({isActive}) => ({color: isActive ? '#E2E2E2' : '#929292'})} to="/coworker" className="nav__coworker" onClick={() => dispatch(closeBurger())}>Мои коллеги</NavLink></li>
                    <li><NavLink style={({isActive}) => ({color: isActive ? '#E2E2E2' : '#929292'})} to="/comment" className="nav__comment" onClick={() => dispatch(closeBurger())}>Комментарий</NavLink></li>
                    <li><NavLink style={({isActive}) => ({color: isActive ? '#E2E2E2' : '#929292'})} to="/correction" className="nav__correction" onClick={() => dispatch(closeBurger())}>Коррекция смены</NavLink></li>
                </ul>
            </nav>
    )
}
export default Navbar;