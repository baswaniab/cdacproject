import React, { Component } from 'react';



import './HomeScreen.css'
import {useGlobalContext} from './context'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

class Home extends Component{
    render() {
        return  <React.Fragment>        
        <div className="slide">
            <div className="container carousel">
                <Carousel />
            </div>
        </div>    
        </React.Fragment>
    }
}


const Carousel =()=>{
     let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear"
    }
    const {kitchen}=useGlobalContext();
    return <Slider {...settings}>
        {kitchen.map(item=>{
            return <React.Fragment key={item.id}>
            <Link to={`/kitchen/${item.id}`}>
                <div className="card-wrapper" >
                    <div className="card" >
                        <div className="card-image">
                            <img src={item.image} alt="" style={{width:"100%",height:"290px"}}/>
                        </div>
                    </div>
                </div>
            </Link>
            </React.Fragment>  
            
        })}
    </Slider>
}

export default Home;
