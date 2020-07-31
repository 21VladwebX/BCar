import React from 'react';
import Header from './components/Header'
import Routes from "./pages/routes";
import {createUseStyles} from 'react-jss'
import styles from "./styles";

const useStyles = createUseStyles(styles);
function App() {
    const classes = useStyles();
    return (
    <div className={classes.appWrapper}>
      <Header />
        <Routes />
    </div>
    );
}

export default App;
