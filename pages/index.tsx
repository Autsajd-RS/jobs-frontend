import { Button, Link } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../app-redux/counterSlice';
import { RootState } from '../app-redux/store';
import StyledButton from '../components/StyledButton';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

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

export default Home;
