import React from "react";
import {projectProfile} from './data';
import { Link, useHistory } from 'react-router-dom'
import logo from './logo.png';
import './navbar.css'

export default function Navbar(){
    const {title}=projectProfile
    const history=useHistory();
    window.onload=()=>{
        const icon=document.querySelector('.searchicon');
        const search=document.querySelector('.navsearch');
        const input=document.querySelector('.hidecontent');
        icon.onclick=()=>{
            search.classList.toggle('active');
            input.classList.toggle('hide');
        }
        const clear=document.querySelector('.clear');
        clear.onclick=()=>{
         document.getElementById('search').value='';
        }
    }
    const handleSigin=(event)=>{
        history.push('/login')
    } 
    const handleCart=(event)=>{
        history.push('/cart')
    } 
    
    return <>
        <div id="navbar">
            
                <div className="logo">
                    <Link to="/">
                    <img src={logo} alt="Home Chef" id='logo'></img>
                    </Link>
                </div>
           
                <h1 id='projecttitle'>
                     <Link to="/">{title} </Link></h1>
           
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
                <i className="fa fa-user-o" onClick={handleSigin} >&nbsp; Sign-in</i>
            </div>
            <div className="cart">
                <i className="fa fa-shopping-cart" onClick={handleCart} >&nbsp; Cart</i>
            </div>
            
            
        </div>    
    
    </>
}