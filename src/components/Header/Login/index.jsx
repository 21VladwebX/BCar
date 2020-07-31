import React from 'react';
import useModal from "../../../hooks/useModal";
// import Modal from "components/common/Modal";
import Modal from "../../common/Modal";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {createUseStyles} from "react-jss";
import styles from './styles';

  const useStyles = createUseStyles(styles);

const UserAcc = () => {
  //check cookie for userLogin data
  // return isUserLogined
  //   ? ''
  //   : (<>Login <AccountCircleIcon/></>)
  return <>Login <AccountCircleIcon/></>
}

const Login = () => {
    const {isShowing, toggle} = useModal(false);
    const classes = useStyles();
    return (
        <div>
            {/*<span className={classes.label} onClick={() => {toggle(true)}}>Login <AccountCircleIcon/></span>*/}
            <span className={classes.label} onClick={toggle.bind(null,true)}><UserAcc /></span>
            <Modal shouldShowModal={isShowing} toggle={toggle} title={'Login form'}>
                <p> Form should be here</p>
            </Modal>
        </div>
    );
}

export default Login;
