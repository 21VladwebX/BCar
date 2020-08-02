import React from 'react';
import {createUseStyles} from "react-jss";
import PropTypes from 'prop-types';
import styles from './styles';

const useStyles = createUseStyles(styles);
const propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  info: PropTypes.string,
}

export const Employee = ({img, name, info}) => {
  const classes = useStyles();
  return (
    <div className={classes.itemWrapper}>
      <div className={classes.employeeLogo}>
        <img src={img} alt=""/>
      </div>
      <div className={classes.name}>
        <span>{name}</span>
      </div>
      <div className={classes.info}>
        <span>{info}</span>
      </div>
    </div>
  );
}
Employee.propTypes = propTypes;

export default Employee;
