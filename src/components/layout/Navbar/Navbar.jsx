import { useDispatch, useSelector } from 'react-redux'
import {NavLink , Link} from 'react-router-dom'
import { useEffect } from 'react'
import { closeBurger } from '../../../actions'

import Exit from '../../shared/exit/Exit'
import './Navbar.scss'

const Navbar = () => {

    const dispatch = useDispatch()
    const {burgerIsOpen} = useSelector(state => state.burger)

    useEffect(() => {
        if(burgerIsOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        
        // return () => document.body.style.overflow = '';
     }, [burgerIsOpen]);

    let overlayClass = 'overlay'
    let defaultClass = 'nav'
    if(burgerIsOpen === true ) {
        defaultClass += ' nav-active'
        overlayClass += ' overlay-active'
    }

    return (
        <>
        <div className={overlayClass}></div>
            <nav className={defaultClass}>
                <ul>
                    <li><NavLink style={({isActive}) => ({color: isActive ? '#E2E2E2' : '#929292'})} to="/duty" className="nav__duty" onClick={() => dispatch(closeBurger())}>Дежурство</NavLink></li>
                    <li><NavLink style={({isActive}) => ({color: isActive ? '#E2E2E2' : '#929292'})} to="/coworker" className="nav__coworker" onClick={() => dispatch(closeBurger())}>Мои коллеги</NavLink></li>
                    <li><NavLink style={({isActive}) => ({color: isActive ? '#E2E2E2' : '#929292'})} to="/comment" className="nav__comment" onClick={() => dispatch(closeBurger())}>Комментарий</NavLink></li>
                    <li><NavLink style={({isActive}) => ({color: isActive ? '#E2E2E2' : '#929292'})} to="/correction" className="nav__correction" onClick={() => dispatch(closeBurger())}>Коррекция смены</NavLink></li>
                </ul>
                <div className='nav__profile'>
                    <Link to="/profile" className="thumbnail" onClick={() => dispatch(closeBurger())}>МА</Link>
                    <div className="info">
                        <Link to="/profile" className="name" onClick={() => dispatch(closeBurger())}>Михаил</Link>
                        <span className="workplace">Рабочее место: <span className="workplace-green">Офис</span></span>
                        <Exit position={'right'}/>
                    </div>
                </div>
                <Exit position={'left'} component={'nav'}/>
            </nav>
            
        </>
    )
}
export default Navbar;