import React from 'react';
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";


const Header = () => {
    return (
        <div className={classes.header}>
            <nav>
                <div className={classes.navBar + ' nav-wrapper  blue darken-2'}>
                    {/*<a href="#" className="brand-logo">Logo</a>*/}
                    <ul id="nav-mobile" className="right">
                        <li><NavLink to={'/'} activeClassName={classes.active}>Home</NavLink></li>
                        <li><NavLink to={'/users'} activeClassName={classes.active}>Users</NavLink></li>
                        <li><NavLink to={'/profile'} activeClassName={classes.active}>Profile</NavLink></li>
                        <li><a className="waves-effect waves-light btn">Login</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;
