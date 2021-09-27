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
        <div className="row offset-4 mt-5">
                <Link to='/chef/additem'>
                    <button className="col-md-3 offset-1 my-2 btn btn-success" type="button" >add button</button>
                </Link>
           
                <Link to='/chef/updateitem'>
                    <button className="col-md-3 offset-1 my-2 btn btn-warning" type="button" >update button</button>
                </Link>
            
                <Link to='/chef/deleteitem'>
                    <button className="col-md-3 offset-1 my-2 btn btn-danger" type="button" >delete button</button>
                </Link>
            
                <Link to='/chef/menuitem'>
                    <button className="col-md-3 offset-1 my-2 btn btn-primary" type="button" >menu button</button>
                </Link>
        
             
        </div>    
        );
    
}



export default ChefContent;