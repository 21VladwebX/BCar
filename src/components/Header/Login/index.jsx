import React, {useEffect, useState} from 'react';
import useModal from "../../../hooks/useModal";
import Modal from "components/common/Modal";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PropTypes from 'prop-types';
import {createUseStyles} from "react-jss";
import { useCookies } from 'react-cookie';
import styles from './styles';
import loginUserStyles from "./loginUserStyles";

// const useStyles = createUseStyles(styles);
const loginUserUseStyl = createUseStyles(loginUserStyles);
const loginFormPropTypes = {
  setAccToCookie: PropTypes.func.isRequired
}
const LoginForm = ({setAccToCookie}) => {

  const [login, changeLogin] = useState('');
  const [password, changePass] = useState('');
  const onSubmit = e => {
    //trigger request to BE and set cookie in case req was success
    const role = 'admin';
    const accInfo = {
      login,
      password,
      role
    };
    setAccToCookie('account', accInfo);
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="login">Login:</label>
      <input value={login} type="text" name='login' onChange={({target:{value}}) => {changeLogin(value)}}/>
      <label htmlFor="pass">Password:</label>
      <input value={password} type="pass" name='pass' onChange={({target:{value}}) => {changePass(value)}}/>
      <button type='submit'>Send</button>
    </form>
  )
}
LoginForm.propTypes = loginFormPropTypes;

const loginUserPropTypes = {
  isShowing: PropTypes.bool,
  login: PropTypes.string,
  toggle: PropTypes.func,
  setCookie: PropTypes.func
}
const LoginUser = ({isShowing, login, toggle, setCookie})=> {
  // const [shouldShhow, togggle
  const classes = loginUserUseStyl();

  const logOutHandler = () => {
    //remove acc from cookie
    setCookie('account',{})
  }

  return (
    <>
      {login
        ? (
          <>
            <span>{login} <AccountCircleIcon/></span>
            <div onClick={()=>{logOutHandler()}}>Log Out</div>
          </>
        )
        : (
          <>
            <span className={classes.login} onClick={()=>{toggle(true)}}>Log in</span>
            <Modal shouldShowModal={isShowing} toggle={toggle} title={'Login form'}>
              <LoginForm setAccToCookie={setCookie} />
            </Modal>
          </>
        )
      }
    </>
  )
}
LoginUser.propTypes = loginUserPropTypes;

const Login = () => {
    const {isShowing, toggle} = useModal(false);
    const [cookie, setCookie] = useCookies(['account']);
    const login = cookie.account?.login ;

    const loginUserProps = {
      login,
      toggle,
      isShowing,
      setCookie
    }
    return (
        <div>
          <LoginUser {...loginUserProps}/>
        </div>
    );
}

export default Login;
