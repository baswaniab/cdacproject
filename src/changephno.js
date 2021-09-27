import React, { Component } from 'react'

export default class Changephno extends Component
 {
    constructor(props) {
        super(props)
    
        this.state = {
             phoneNo: ""
        }
    }
    
    changephno = (event) => { this.setState( {phoneNo: event.target.value} ) }

    render() {
        return (
            <div className="change-address-border">
                <form action="" method="get">
                <label className="labelp address-regularing"> Phone No : </label>                
                <input value = {this.state.phoneNo} onChange ={this.changephno} className = "changeAddress-label" ></input> 
                <br/>

                <button type="submit" className=" change-address-button">Change Phoneno</button>
                <br/> 
              </form>
            </div>
        )
    }
}
