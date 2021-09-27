import React,{Component} from 'react';
import axios from 'axios';

export default class Newpassword extends Component{
 state={};
 handleSubmit = e=>{ 
     e.preventDefault();

const data={
    token:this.props.match.params.id,
    password:this.password,
    confirm_password:this.confirm_password

}

axios.post('newpassword',data).then(
    res=>{
        console.log(res);
        this.setState({

          reset:true  
        });
    }
).catch(err=>{console.log(err);}) 


 };
 render()
 {
//      if(this.state.reset){
//  return <Redirect to={'/login'}/>
//      }
 return (
       
<div className="App">
<div class="container">
        <div class="row">
            <div class="col-lg-4"></div>
            <div class="col-lg-4">
                
               <form onSubmit={this.handleSubmit}>
                   <label>New Password</label>
                <div class="form-group pass_show"> 
                    <input type="password"  class="form-control" placeholder="New Password"/> 
                </div> 
                   <label>Confirm Password</label>
                <div class="form-group pass_show"> 
                    <input type="password" class="form-control" placeholder="Confirm Password"/>
                </div> 
                 <div> 
                     <input type="submit" value="Reset Password"/>
                 </div>
                 </form>
            </div>
            <div class="col-lg-4"></div>  
        </div>
    </div>


</div>
);
}
}
 
