
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

import {openBurger, closeBurger} from '../../../actions/'

import './Banner.scss';
import logo from '../../../assets/img/banner/logo.svg';

const Banner = () => {
    const dispatch = useDispatch()
    const {burgerIsOpen} = useSelector(state => state.burger)

    const onBurger = () => {
        return burgerIsOpen === false ? dispatch(openBurger()) : dispatch(closeBurger()) 
    }

    let defaultClass = 'burger'

    if(burgerIsOpen === true) {
        defaultClass += ' burger-active'
    }

    return (
        <div className="banner">
            <Link to="/" className="banner__logo"><img src={logo} alt=""></img></Link>
            <h1 className="banner__title">Привет, мы тебя не узнали. Авторизируйся в системе.</h1>
            <div className={defaultClass} onClick={() => onBurger()}>
                <span></span>
            </div>
        </div>
    )
}

export default Banner;