import React from 'react';
import {projectProfile,images} from './data';
import logo from './logo.png';
import './HomeScreen.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home=()=>{
    return <React.Fragment>

        <Navbar {...projectProfile}/> 
        <div className="slide">
            <div className="container carousel">
                <Carousel/>
            </div>
        </div>
        <h1>helloo</h1>

    </React.Fragment>
}



const Navbar=({title})=>{
    // let clear;
    window.onload=()=>{
        const icon=document.querySelector('.searchicon');
        const search=document.querySelector('.navsearch');
        const input=document.querySelector('.hidecontent');
        icon.onclick=()=>{
            search.classList.toggle('active');
            input.classList.toggle('hide');
        }
        const clear=document.querySelector('.clear');
    //     clear=()=>{
    //     console.log('called');
    //     document.getElementById('search').value='';
    //     console.log('delelte');
    // }
        clear.onclick=()=>{
         document.getElementById('search').value='';
        }
    }
     
    
    return <>
        <div id="navbar">
            <div className="logo">
                <img src={logo} alt="Home Chef" id='logo'></img>

            </div>
            <h1 id='projecttitle'>{title}</h1>
            <div className='searchbox'>

                <div className='navsearch'>
                    <span className='searchicon fa fa-search'></span>
                    <div className='hidecontent hide'>

                        <div className='input'>
                            <input type="text" placeholder="search" id='search'></input>
                    
                            <span className='clear fa fa-close' ></span>
                        </div>
                
                     </div>
                </div>
            </div>
            <div className="user">
                <i className="fa fa-user-o" >&nbsp; Sign-in</i>
            </div>
            <div className="cart">
                <i className="fa fa-shopping-cart" >&nbsp; Cart</i>
            </div>
            
            
        </div>
         {/* <div className='search'>
                <div className='icon' ></div>
                <div className='input'>
                    <input type="text" placeholder="search" id='search'></input>
                    <span className='clear' onClick={clear}></span>
                </div>
            </div> */}
        
    
    </>
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
    return <Slider {...settings}>
        {images.map(item=>{
            return <div className="card-wrapper">
                <div className="card" >
                    <div className="card-image">
                        <img src={item} alt="" style={{width:"100%",height:"290px"}}/>
                    </div>
                </div>
            </div>
        })}
    </Slider>
}

export default Home;
