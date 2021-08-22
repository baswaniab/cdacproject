import React from 'react';
import { useParams } from 'react-router';
import {useGlobalContext} from './context'
import './kitchenview.css'

export default function Kitchen(){
    const {id}=useParams();
    const {kitchen}=useGlobalContext()
    const kitchenDetails=kitchen.find((item)=> item.id===id )
    if(kitchenDetails){
        
        return <>
        <KitchenComponent kitchen={kitchenDetails}/>
        </>
    }
    else{
        return <h2>loading</h2>
    }
}

const KitchenComponent=(props)=>{
    const kitchenDetails=props.kitchen;
    console.log(kitchenDetails);
    return <>
    <div className="container-fluid">
        <div className='row '>
            <div className="col-md-3 kitchen-detail">
                <h3>{kitchenDetails.kitchenName}</h3>
            </div>
            <div className="col-md-8 px-5 kitchen-content" >
                <div className="row justify-content-center">
                    <div className="col-md-5 kitchen-image">
                        <div className="card">
                            <img src={kitchenDetails.image} alt="" ></img>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 menu">
                        <h2>Menu</h2>
                    </div>
                    <div className="col-md-12">
                        <MenuList {...props}/>
                    </div>
                </div>               
            </div>
        </div>
    </div>
    
    </>
}

const MenuList=(props)=>{
    const kitchenDetails=props.kitchen;

    return <>
    {kitchenDetails.menu.map((item)=>{
        return<React.Fragment key={item.foodId}>
            <div className="menu-list">
                <div className="row">
                    <div className="col-md-3">
                        <img src={item.foodImage} alt={item.foodName} style={{width:'150px',height:'100px'}} />
                    </div>
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-12">
                                <h4>{item.foodName}{(()=>{
                                        if(item.foodType==='Veg'){
                                            return <span className="px-1" style={{color:"green"}}>&#8865;</span>
                                        }
                                        else if(item.foodType){
                                            return <span className="px-1" style={{color:"red"}}>&#8865;</span>
                                        }
                                    })()}
                                </h4>
                            </div>
                            <div className="col-md-12">
                                <h5>Rs.&nbsp;{item.foodPrice}</h5>
                            </div>
                        </div>
                        
                    </div>
                </div>
               
            </div>
           
        </React.Fragment> 
    })}
    </>
}