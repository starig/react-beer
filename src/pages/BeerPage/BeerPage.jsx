import React, {useEffect} from 'react';
import styles from './BeerPage.module.scss';
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchSingleBeer} from "../../redux/slices/singleBeerSlice";
import Loader from "../../components/Loader/Loader";

const BeerPage = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.singleBeer.isLoading);
    const { image_url, name, tagline, description, abv, food_pairing } = useSelector(state => state.singleBeer.beer);

    const fetchItem = async () => {
        try {
            dispatch(fetchSingleBeer(id))
        } catch (e) {
            console.error(e)
        }
    };

    useEffect(() => {
        fetchItem()
    }, []);

    return (
        <div className={styles.page}>
            {
                isLoading ? <Loader className={styles.loader}/> : <div className={styles.beerPage}>
                    <div className={styles.image}>
                        <img src={image_url} className={styles.imageImg} alt={'Beer Image'} />
                    </div>
                    <div className={styles.info}>
                        <div className={styles.name}>
                            {name}
                            <div className={styles.abv}>
                                {abv} abv
                            </div>
                        </div>
                        <div className={styles.tagline}>
                            {tagline}
                        </div>
                        <div className={styles.foodPairing}>
                            <div className={styles.title}>Food Pairing:</div>
                            {
                                food_pairing.map(item => <div className={styles.foodPairingItem}>{item}</div> )
                            }
                        </div>
                        <div className={styles.descriptionBlock}>
                            <div className={styles.title}>Description:</div>
                            <div className={styles.description}>
                                {description}
                            </div>
                        </div>
                    </div>
                </div>
            }
            <Link to={'/'} className={styles.returnButton}> Return to homepage</Link>
        </div>
    )
}

export default BeerPage;