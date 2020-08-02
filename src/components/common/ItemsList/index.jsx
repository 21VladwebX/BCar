import React from 'react';
import {createUseStyles} from "react-jss";
import PropTypes from 'prop-types';
import styles from './styles';

const useStyles = createUseStyles(styles);
const propTypes = {
  children: PropTypes.node
}
const ItemsList = ({children}) => {
  const classes = useStyles();
  return (
    <div className={classes.listWrapper}>
      {children}
    </div>
  );
}

ItemsList.propTypes = propTypes;

export default ItemsList;
