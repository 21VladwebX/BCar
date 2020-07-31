import React from 'react';
import {createUseStyles} from "react-jss";
import styles from './styles';

const useStyles = createUseStyles(styles);
const Home = () => {
    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
        sdf
        </div>
    );
}

export default Home;
