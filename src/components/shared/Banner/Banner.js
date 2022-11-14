import './Banner.scss';
import logo from '../../../assets/header/logo.svg';
import {Link} from 'react-router-dom'
const Banner = () => {
    return (
        <div className="banner">
            <Link to="/" class="banner__logo"><img src={logo} alt=""></img></Link>
            <h1 className="banner__title">Привет, мы тебя не узнали. Авторизируйся в системе.</h1>
            <div className="burger">
                <span></span>
            </div>
        </div>
    )
}

export default Banner;