import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { fetchBeer } from "../../redux/slices/beerSlice";
import BeerItem from "../../components/BeerItem/BeerItem";
import styles from './Homepage.module.scss';
import Skeleton from "../../components/Skeleton/Skeleton";
import Loader from "../../components/Loader/Loader";
import {Link} from "react-router-dom";

const Homepage = () => {
    const {data, page, isLoading, isFetching} = useSelector(state => state.beer);
    const dispatch = useDispatch();

    const fetchData = async () => {
        try {
            dispatch(fetchBeer({ page }));
        } catch (e) {
            console.error(e)
        }
    };

    useEffect(() => {
        fetchData()
    }, []);

    console.log(data);

    return (
        <>
            <div className={styles.beers}>
                {
                    isFetching ? data.map(item => <Skeleton />) :
                        data.map(item => <Link to={`/beer/${item.id}`} key={item.id} className={styles.beerLink}>
                            <BeerItem title={item.name}
                                      imgUrl={item.image_url}
                                      description={item.description} />
                        </Link>)
                }
            </div>
            {
                isLoading && <Loader />
            }
        </>

    )
}

export default Homepage;