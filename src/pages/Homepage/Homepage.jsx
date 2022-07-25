import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchBeer, selectPage} from "../../redux/slices/beerSlice";
import BeerItem from "../../components/BeerItem/BeerItem";
import styles from './Homepage.module.scss';
import Skeleton from "../../components/Skeleton/Skeleton";
import Loader from "../../components/Loader/Loader";
import {Link} from "react-router-dom";
import Pagination from "../../components/Pagination/Pagination";

const Homepage = () => {
    const {data, page, isLoading, isFetching, searchValue} = useSelector(state => state.beer);
    const dispatch = useDispatch();

    const fetchData = async () => {
        try {
            dispatch(fetchBeer({ page, searchValue }));
        } catch (e) {
            console.error(e)
        }
    };

    const onPageChange = (pageNumber) => {
        dispatch(selectPage(pageNumber));
    }

    useEffect(() => {
        fetchData()
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
        fetchData();
    }, [page, searchValue])


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
                data.length === 0 && <div className={styles.emptyPage}>No beer found :(</div>
            }
            {
                isLoading && <Loader />
            }
            <Pagination currentPage={page} onChangePage={(num) => onPageChange(num)}/>
        </>

    )
}

export default Homepage;