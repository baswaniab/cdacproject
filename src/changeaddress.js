import React, { Component } from 'react';
import './cart.css';

export default class Changeaddress extends Component 
{

    constructor(props) {
        super(props)
    
        this.state = {
             Address: "",
             City: "",
             State: "",
             Pincode: ""
        }
    }
    
    caddress = (event) => { this.setState( { Address: event.target.value } ) }
    ccity = (event) => { this.setState( { City: event.target.value } ) }
    cstate = (event) => { this.setState( { State: event.target.value } ) }
    cpincode = (event) => { this.setState( { Pincode: event.target.value } ) }

    render() {
        return (
             <form action="" method="get"  className="change-address-border">
                <label className="label-beauty address-regularing"> Address <sup className="supersc">*</sup> : </label>                
                <input value = {this.state.Address} onChange ={this.caddress} className = "changeAddress-label" required></input> 

                <label  className="label-beauty address-regularing"> City <sup className="supersc">*</sup> : </label>
                <input type="text" value = {this.state.City} onChange = {this.ccity} className = "changeAddress-label" required></input> <br/>

                <label className="label-beauty address-regularing"> State <sup className="supersc">*</sup> : </label>
                <input type="text" value = {this.state.State} onChange = {this.cstate} className = "changeAddress-label" required></input> &ensp; &ensp; 

                <label className="label-beauty address-regularing" > Pincode <sup className="supersc">*</sup> : </label>
                <input type="text" inputMode= "numeric" value = {this.state.Pincode} onChange = {this.cpincode} className = "changeAddress-label" required></input> <br/>
                 <br/>
                <button type="submit" className=" change-address-button">Change address</button>
                <br/> 

            </form>
        )
    }
}
