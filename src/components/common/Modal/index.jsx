import React from 'react';
import {createUseStyles} from 'react-jss';
import classNames from 'classnames';
import styles from './styles';
const useStyles = createUseStyles(styles);

const Modal = ({shouldShowModal,children}) => {
    const classes = useStyles();
    const wrapperClasses = classNames(classes.wrapper,{
        [classes.open]: shouldShowModal
    })
    // debugger
    return (
        <div className={wrapperClasses}>
            <div className={classes.content}>
                {children}
            </div>
        </div>
    );
}
export default Modal;
