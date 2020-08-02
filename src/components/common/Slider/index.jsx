import React from 'react';
import ReactSlider from "react-slick";
import PropTypes from 'prop-types';

const propTypes = {
  settings: PropTypes.object, //there can be a lot of items
  children: PropTypes.elementType
};

const Slider = ({settings, children}) => {
  return (
    <ReactSlider {...settings}>
      {children}
    </ReactSlider>
  );
}

Slider.propTypes = propTypes;

export default Slider;
