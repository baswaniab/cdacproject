import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import './kitchenpage.css';
export default class menupage extends Component 
{

    constructor(props) {
        super(props)
        this.state = {
            foodName: '',
            foodType: '',
            foodPeriod: '',
            foodPrice: '',
            chefId: '',
        }
    }
    cfoodName = (event) => {  this.setState ( {foodName: event.target.value} ) }
    cfoodType = (event) => { this.setState ( { foodType: event.target.value} ) }
    cfoodPeriod = (event) => { this.setState ( { foodPeriod: event.target.value} ) }
    cfoodPrice = (event) => { this.setState ( { foodPrice: event.target.value} ) }
    cchefId = (event) => { this.setState ( { chefId: event.target.value} ) }


        submitted = (eve) => { eve.preventDefault();}

        saveuser = (eve) => { 
            eve.preventDefault();
            fetch("http://localhost:8099/menu/menusave",
            {   
                method:"POST",
                
                
                 headers:{"Content-Type":"application/json"},
                body:JSON.stringify({
                    foodName: this.state.foodName,
                    foodType: this.state.foodType,
                    foodPeriod: this.state.foodPeriod,
                    foodPrice: this.state.foodPrice,
                    chefId: this.state.chefId,
                }
                )
                 
    
            }).then(()=>{
                // console.log(body);
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
                <input type="text" name="foodName" value = {this.state.foodName} onChange = {this.cfoodName} className = "ip form-control" required></input><br/>
                </div>
                </div> 
                <div className="form-group row">  
                <label className="labelp col-sm-2 col-form-label"> Food Type  </label>
                <div className="col-sm-5 ">
                <select className = "ip selectarea form-control" name = " foodType" value = {this.state.foodType} required  onChange = {this.cfoodType}>
                     <option value='' selected disabled> select</option>
                    <option value="veg"> Veg</option>
                    <option value = "non-veg"> Non-veg</option>
                </select><br/>
                </div>
                </div>
                <div className="form-group row">  
                <label className="labelp col-sm-2 col-form-label"> Food Period  </label>
                <div className="col-sm-5 ">
                <input type="text" name="foodPeriod" value = {this.state.foodPeriod} onChange = {this.cfoodPeriod} className = "ip form-control" required></input> <br/>
                </div>
                </div>
                <div className="form-group row">  
                <label className="labelp col-sm-2 col-form-label"> Food Price </label>
                <div className="col-sm-5 ">
                <input type="text" name="foodPrice" value = {this.state.foodPrice} onChange = {this.cfoodPrice} className = "ip form-control" required></input> <br/>
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