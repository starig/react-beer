import React from 'react';
import logoGif from '../../assets/logo.gif';
import styles from './Header.module.scss';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className={styles.header}>
            <Link to={'/'} className={styles.logo}>
                <img src={logoGif} alt={'Logo'} className={styles.logoImg}/>
                <h3 className={styles.logoText}>starig beer</h3>
            </Link>
            <div className={styles.search}>
                search div
            </div>
        </div>
    )
}

export default Header;