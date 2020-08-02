import React from 'react';
import {createUseStyles} from "react-jss";
import styles from './styles';
import {Link} from "react-router-dom";

const useStyles = createUseStyles(styles);
const Component = ({id, img, model, engine, brand}) => {
  const classes = useStyles();
  const link = `/autos/${id}`;

  return (
    <Link to={link}>
      <div className={classes.wrapper}>
        <div className={classes.imgWrapper}>
          <img src={img} alt=""/>
        </div>
        <div className={classes.infoWrapper}>
          <div className={classes.brand}> {brand}</div>
          <div className={classes.model}> {model}</div>
          <span className={classes.engine}> {engine.type} - </span>
          <span className={classes.engine}> {engine.capacity}</span>
        </div>
      </div>
    </Link>
  );
}

export default Component;
