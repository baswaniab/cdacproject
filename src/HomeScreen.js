import React from 'react';
import project from './data';
import logo from './logo.png';
import './HomeScreen.css'

const Home=()=>{
    return <React.Fragment>
        <Navbar {...project}/>
        <h1>Isdjhask</h1> 
<h3>
    hi hlooooooo
</h3>

    </React.Fragment>
}



const Navbar=({title})=>{
    let clear;
    window.onload=()=>{
        const icon=document.querySelector('.icon');
    const search=document.querySelector('.search');
    icon.onclick=()=>{
        search.classList.toggle('active');
    }
    clear=()=>{
        document.getElementById('search').value='';
    }
}
     
    
    return <>
        <div id="navbar">
            <img src={logo} alt="Home Chef" id='logo'></img>
            <h1 id='projecttitle'>{title}</h1>
           
        </div>
         <div className='search'>
                <div className='icon' ></div>
                <div className='input'>
                    <input type="text" placeholder="search" id='search'></input>
                    <span className='clear' onClick={clear}></span>
                </div>
            </div>
    
    </>
}

export default Home;