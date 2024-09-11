import React from "react";
import { Link } from "react-router-dom";
import logo from '../styles/img/logo.png'
const Logo = () => {
    return (
        <div>
            <Link to={'/'}>
                <img src={logo} alt="Site Logo" className="site-logo"/>
            </Link>
        </div>
    )
}

export default Logo;