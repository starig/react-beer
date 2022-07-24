import React from 'react';
import styles from './Loader.module.scss';
import loader from './../../assets/loading.gif';

const Loader = () => {
    return (
        <div className={styles.loader}>
            <div className={styles.title}>Loading...</div>
            <img src={loader} alt={'Loading'} className={styles.loaderImg} />
        </div>
    )
}

export default Loader;