import React from 'react';
import {createUseStyles} from "react-jss";
import Slider from '../../components/common/Slider';
import {Link} from 'react-router-dom';
import styles from './styles';
import ItemsList from "components/common/ItemsList";
import {mockEmployeesData} from "pages/Home/mockData";
import Employee from "pages/Home/Employees";

const useStyles = createUseStyles(styles);

const SliderWrapper = () => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 1000,
        cssEase: "linear"
    };

    return(
      <Slider sliderSettings={sliderSettings}>
          <div>
              <img src="https://ireland.apollo.olxcdn.com/v1/files/df99b4hytjii-UA/image;s=1000x700" alt=""/>
          </div>
          <div>
              <img src="https://aeceurope.com/wp-content/uploads/ram-classic-bg-mobile.jpg" alt=""/>
          </div>
      </Slider>
    )
}

const Home = () => {
    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            <SliderWrapper />
            <div className={classes.employeesWrapper}>
              <h2 style={{textAlign: "center"}}> Our employees</h2>
              <ItemsList >
                {mockEmployeesData.map(({id,...rest})=>(
                  <Employee key={id} {...rest}/>
                ))}
              </ItemsList>
            </div>
            <div className={classes.letsFind}>
              <h3>Lets find the best car for you?</h3>
              <Link to='/autos'>
                Let`s do it!
              </Link>
            </div>
        </div>
    );
}

export default Home;
