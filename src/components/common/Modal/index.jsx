import React from 'react';
import ReactDOM from 'react-dom';
import {createUseStyles} from 'react-jss';
import classNames from 'classnames';
import CloseIcon from '@material-ui/icons/Close';
import styles from './styles';
const useStyles = createUseStyles(styles);

const Modal = ({shouldShowModal, toggle, title, children}) => {
    const classes = useStyles();

    const wrapperClasses = classNames(classes.wrapper, {
        [classes.open]: shouldShowModal
    })

    const modalJSX =
      <div className={wrapperClasses}>
        <div className={classes.content}>
            <div className={classes.modalTitle}>
                <span>{title}</span>
                <div className={classes.closeBtn} onClick={()=>toggle(false)}>
                    <CloseIcon />
                </div>
            </div>
            <div className={classes.body}>
                {children}
            </div>
        </div>
    </div>
    return (
      ReactDOM.createPortal(modalJSX, document.body)
    );
}

const ModalWrapper = ({shouldShowModal, ...rest}) => shouldShowModal ?   <Modal { ...{shouldShowModal, ...rest} }/>: null;

export default ModalWrapper;
