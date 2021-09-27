import React, { Component } from 'react';
import './carddetails.css';

export default class Carddetails extends Component
 {

    constructor(props) {
        super(props)
    
        this.state = {
            cardHolderName: "",
            cardNumber: "",
            cardType: "",
            cvvNo: "",
            expDate: ""
             
        }
    }

    changeCardNumber = (event) => { this.setState( { cardNumber : event.target.value} ) };
    changeCardHolderName = (event) => { this.setState( { cardHolderName : event.target.value} ) };
    changeCardType = (event) => { this.setState( { cardType : event.target.value} ) };
    changecvvNo = (event) => { this.setState( { cvvNo : event.target.value} ) };
    changeExpDate =  (event) => { this.setState( { cvvNo : event.target.value} ) };

    render() {
        return (
            <div className="cardBody">

             <div className="ccardBody">
                <label className="label-beauty"> Card Holder Name </label> 
                <input type="text" placeholder="Enter the card holder name" className="input-box-beauty" value= {this.state.cardHolderName} onChange={this.changeCardHolderName} required/> <br/>
                
                <label className="label-beauty"> Card Number </label> 
                <input type="text" inputMode=" numeric" placeholder="Enter your card number" className="input-box-beauty" value= {this.state.cardNumber} onChange={this.changeCardNumber} required/> <br/>

                <label className="label-beauty"> Card Type </label> 
                <input type="text" placeholder="Enter your card type" className="input-box-beauty" value= {this.state.cardType} onChange={this.changeCardType} required/> <br/>

                <label className="label-beauty "> CVV </label> 
                <input type="text" inputMode=" numeric" className="input-box-beauty forcvv" value= {this.state.cvvNo} onChange={this.changecvvNo} required />

                <label className="label-beauty "> Exp date </label> 
                <input type="text" inputMode=" numeric" className="input-box-beauty forcvv" value= {this.state.expDate} onChange={this.changeExpDate} required />
             </div>
            </div>
        )
    }
}
