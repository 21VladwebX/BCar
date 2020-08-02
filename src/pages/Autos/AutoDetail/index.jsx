import React, {useEffect, useState} from 'react';
import {createUseStyles} from "react-jss";
import {detailInfo} from './mockData';
import styles from './styles';

const useStyles = createUseStyles(styles);

const AutoDetail = ({match:{params:{id}}}) => {
  const [auto, changeAutoInfo] = useState();

  useEffect(()=>{
  //get detail info about auto
    const getInfo = new Promise((res,rej)=>{
      setTimeout(()=>{
        res(detailInfo)
      },2000)
    })
    getInfo.then(data=> changeAutoInfo(data))
  },[])

  const classes = useStyles();

  if(!auto) {
    return <div>Preloader</div>
  }

  return (
    <div className={classes.wrap}>
      <h2> This is detail page of {auto.brand}</h2>
      <div className={classes.infoWrap}>
        <img src={auto.img} alt=""/>
        <div className={classes.textWrap}>
          <div> Engine type - {auto.engine.type}</div>
          <div> Engine capacity - {auto.engine.capacity}</div>
        </div>
        <div>
          <span>{auto.info}</span>
        </div>
      </div>
    </div>
  );
}

export default AutoDetail;
