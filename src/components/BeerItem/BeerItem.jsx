import React from 'react';
import styles from './BeerItem.module.scss';

const BeerItem = ({ title, imgUrl, description }) => {
    return (
        <div className={styles.beerItem}>
            <div className={styles.beerTitle}>
                { title }
            </div>
            <div className={styles.beerImage}>
                <img className={styles.beerImg} src={imgUrl} alt={'Beer image'}/>
            </div>
            <div className={styles.beerSubtitle}>
                {
                    description.length <= 140 ? description : description.slice(0, 140) + " ..."
                }
            </div>
        </div>
    )
}

export default BeerItem;