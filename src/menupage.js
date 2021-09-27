import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import './kitchenpage.css';
export default class menupage extends Component 
{

    constructor(props) {
        super(props)
        this.state = {
            foodname: '',
            foodtype: '',
            foodperiod: '',
            foodprice: '',
            chefId: '',
        }
    }
    cfoodname = (event) => {  this.setState ( {foodname: event.target.value} ) }
    cfoodtype = (event) => { this.setState ( { foodtype: event.target.value} ) }
    cfoodperiod = (event) => { this.setState ( { foodperiod: event.target.value} ) }
    cfoodprice = (event) => { this.setState ( { foodprice: event.target.value} ) }
    cchefId = (event) => { this.setState ( { chefId: event.target.value} ) }


        submitted = (eve) => { eve.preventDefault();}

        saveuser = (eve) => { 
            eve.preventDefault();
            fetch("http://localhost:8080/api/menu",
            {   
                method:"POST",
                
                
                 headers:{"Content-Type":"application/json"},
                body:JSON.stringify({
                    Foodname: this.state.foodname,
                    Foodtype: this.state.foodtype,
                    Foodperiod: this.state.foodperiod,
                    Foodprice: this.state.foodprice,
                    Chefid: this.state.chefId,
                }
                )
                 
    
            }).then(()=>{
                console.log("Menu Updated")
            })
        }
            

        
    render() {
        return (
        <div className = "base">

                <h3>Add Item</h3><br/>
                <form onSubmit={this.submitted}> 

                <div className="form-group row"> 
                {/* <div className="name"> */}
                <label className="labelp col-sm-2 col-form-label "> Food Name  </label>
                <div className="col-sm-5 ">
                <input type="text" name="foodname" value = {this.state.foodname} onChange = {this.cfoodname} className = "ip form-control" required></input><br/>
                </div>
                </div> 
                <div className="form-group row">  
                <label className="labelp col-sm-2 col-form-label"> Food Type  </label>
                <div className="col-sm-5 ">
                <select className = "ip selectarea form-control" name = " foodtype" value = {this.state.foodtype} required  onChange = {this.cfoodtype}>
                    <option value='veg'> Veg</option>
                    <option value = 'Non-Veg' >Non-veg</option>
                </select><br/>
                </div>
                </div>
                <div className="form-group row">  
                <label className="labelp col-sm-2 col-form-label"> Food Period  </label>
                <div className="col-sm-5 ">
                <input type="text" name="foodperiod" value = {this.state.foodperiod} onChange = {this.cfoodperiod} className = "ip form-control" required></input> <br/>
                </div>
                </div>
                <div className="form-group row">  
                <label className="labelp col-sm-2 col-form-label"> Food Price </label>
                <div className="col-sm-5 ">
                <input type="text" name="foodprice" value = {this.state.foodprice} onChange = {this.cfoodprice} className = "ip form-control" required></input> <br/>
                </div>
                </div>
                <div className="form-group row">  
                <label className="labelp col-sm-2 col-form-label"> Chef ID  </label>
                <div className="col-sm-5 ">
                <input type="text" name="chefId" value = {this.state.chefId} onChange = {this.cchefId} className = "ip form-control" required></input> <br/>
                </div>
                </div>
                <Link to='/chef'>
                <button type="submit" className="butnu col-sm-1 offset-4 btn btn-success" onClick={this.saveuser}>SUBMIT</button>
                </Link>
                <Link to='/chef'>
                <button type="submit" className="butnu col-sm-1 offset-1 btn btn-danger" >Cancel</button>
                </Link>
                {/* </div> */}
                </form>
            </div>

   )
} 

}