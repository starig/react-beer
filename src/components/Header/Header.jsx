import React from 'react';
import logoGif from '../../assets/logo.gif';
import styles from './Header.module.scss';
import {Link, useLocation} from "react-router-dom";
import Search from "../Search/Search";

const Header = () => {
    const { pathname } = useLocation();
    return (
        <div className={styles.header}>
            <Link to={'/'} className={styles.logo}>
                <img src={logoGif} alt={'Logo'} className={styles.logoImg}/>
                <h3 className={styles.logoText}>starig beer</h3>
            </Link>
            <div className={styles.search}>
                {
                    pathname === '/' && <Search />
                }
            </div>
        </div>
    )
}

export default Header;