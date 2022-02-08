import { Button, Link } from '@mui/material';
import Cookies from 'js-cookie';
import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, setValue } from '../app-redux/counterSlice';
import { RootState } from '../app-redux/store';
import StyledButton from '../components/StyledButton';
import { parseCookies } from '../lib/parseCookies';
import styles from '../styles/Home.module.css';

interface HomePageProps {
    initialCount: number;
}

const Home: NextPage<HomePageProps> = ({ initialCount }) => {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();
    console.log(typeof count);
    useEffect(() => {
        dispatch(setValue(initialCount));
    }, [initialCount]);

    useEffect(() => {
        Cookies.set('count', count.toString());
    }, [count]);

    return (
        <div className={styles.container}>
            <div>
                <button aria-label="Increment value" onClick={() => dispatch(increment())}>
                    Increment
                </button>
                <span>{count}</span>
                <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
                    Decrement
                </button>
                <Link href="/posts/first-post">Go</Link>
            </div>
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const cookies = parseCookies(context.req);
    return {
        props: {
            initialCount: Number.parseInt(cookies.count, 10)
        }
    };
};

export default Home;
