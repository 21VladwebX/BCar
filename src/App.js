import React from 'react';
import Header from './components/Header'
import Routes from "./pages/routes";
import {createUseStyles} from 'react-jss';
import { createStore } from 'redux';
// import {Provider} from "react-redux";
// import Reducers from './redux/reducers'
import { CookiesProvider } from 'react-cookie'
import styles from "./styles";


// const store = createStore(Reducers);
const useStyles = createUseStyles(styles);
function App() {
    const classes = useStyles();
    return (
      // <Provider store={store}>
      <CookiesProvider>
        <div className={classes.appWrapper}>
          <Header />
            <Routes />
        </div>
      </CookiesProvider>
      // </Provider>
    );
}

export default App;
