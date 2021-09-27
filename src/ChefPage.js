import React from 'react';
import { Link } from 'react-router-dom'


const ChefContent =()=>{
// window.onclick = function(event) {
//         const modal=document.getElementById("additem");
//         if (event.target === modal) {
//         modal.style.display = "none";
//         }
//     }
    
  
        return (
            <div>

            <h1>hello</h1>
            <Link to='/chef/additem'>
                <button type="button" >add button</button>
            </Link>
             <Link to='/chef/updateitem'>
                <button type="button" >update button</button>
            </Link>   
            <Link to='/chef/deleteitem'>
                <button type="button" >delete button</button>
            </Link> 
            
            
        </div>
        );
    
}



export default ChefContent;