import React, { Component } from 'react'

export default class Bhim extends Component 
{

    constructor(props) {
        super(props)
    
        this.state = {
             upiId: ""
        }
    }

    changeUpiId = (event) =>{ this.setState( {upiId : event.target.value } )   }
    
    render() {
        return (
            <div className="cardBody">
                <div className="ccardBody">
                <label className="label-beauty "> Enter your BHIM id </label>
                <input type="email" placeholder="eg: Mobilenumber@upi" value={this.state.upiId} onChange={this.changeUpiId} className="input-box-beauty"/>
                </div>
            </div>
        )
    }
}
