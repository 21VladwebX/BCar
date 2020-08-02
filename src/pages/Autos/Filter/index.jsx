import React from 'react';
import PropTypes from "prop-types";

const inputGeneratorPropTypes = {
  type: PropTypes.string,
  data: PropTypes.array,
  onInputChange: PropTypes.func
}

const inputGeneratorDefaultPropTypes = {
  data: []
}
const InputGenerator = ({type, data, onInputChange}) => {
  // debugger
  switch (type){
    case 'text':
      return (<input type="text" onChange={onInputChange}/>)
      break;
    case 'radio':
      return  (<input type="radio"/>)
      break;
    case 'radio':
      return  (<input type="radio"/>)
      break;
    case 'select':
      return  (
        <select name="" onChange={(e)=>{onInputChange(e.target.value)}}>
          {data.map((item,indx)=> <option key={indx} value={item}>{item}</option>)}
        </select>)
      break;
    default:
      return <span>No such input</span>
  }
};
InputGenerator.propTypes = inputGeneratorPropTypes;
InputGenerator.defaultProps = inputGeneratorDefaultPropTypes;

const propTypes = {
  model: PropTypes.arrayOf(PropTypes.string),
  marka: PropTypes.arrayOf(PropTypes.string),
  year: PropTypes.number,
  info: PropTypes.string,
  engine: PropTypes.shape({
    type: PropTypes.string,
    capacity: PropTypes.string
  })
}
const Filter = ({ brand, onFilterChanged}) => {

  const onFormSubmit = ({target:{value}}) => {
    onFilterChanged(value);
  }
  const onInputChange = val =>{
    onFilterChanged(val);
  }

  return (
    <div>
      <form onSubmit={e=>{onFormSubmit(e)}}>
        <InputGenerator type='select' data={brand} onInputChange={onInputChange}/>
      </form>
    </div>
  );
}

Filter.propTypes = propTypes;
export default Filter;
