import React, {useEffect, useState} from 'react';
import Filter from "./Filter";
import ItemsList from "components/common/ItemsList";
import AutoItem from './AutoItem'
import {mockData, filterParamsMockData} from './mockData';

const getDataForFilter = (data) =>{
  return data.reduce((acc,item)=>{
    const keys = Object.keys(item);
    // no needed id and img
    let forDeletion = ['id','img']

    const newKeys = keys.filter(item => !forDeletion.includes(item))
    newKeys.forEach(key => {
      if(acc[key] === undefined){
        acc[key] = [];
      }
      acc[key].push(item[key])
    })
    return acc;
  },[])
}
//id - string (uuid)

const Autos = ({id}) => {
  const [reqParams, changeReqParams] = useState({});
  const [filterParams, changeFilterParams] = useState([]);
  const [autos, changeAutos] = useState([]);

  useEffect(()=>{
    const autos = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(mockData);
      }, 300);
    });
    autos.then(data=>{
      changeAutos(data)
    })
    const filterParams = new Promise( (res,rej)=>{
      res(filterParamsMockData)
    })
    filterParams.then(data=>changeFilterParams(data))
    //req to BE. If id was sett then request for auto with id, in other case request for all cars
  },[]);
  const onFilterChanged = val => {
    console.log(val);
    //there should be new req to BE
    const filteredArr = mockData.filter(({brand})=>{
      return brand === val
    })
    changeAutos(filteredArr);
  };

  const filterProps = {
    ...filterParams,
    onFilterChanged
  };

  return (
    <div>
      <Filter {...filterProps}/>
      <ItemsList >
      {/*  map of autos item*/}
        {autos.map(({id, ...rest})=>(
          <AutoItem key={id} {...{id,...rest}}/>
        ))}
      </ItemsList >
      {/*if autos.{} > 1 then show detail show, in other case show list of cars*/}
      {/*autos*/}
    </div>
  );
}

export default Autos;
