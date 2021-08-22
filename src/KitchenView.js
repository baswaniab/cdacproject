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
            <div className="col-md-3 kitchen-detail"></div>
            <div className="col-md-8 px-5" >
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
                </div>               
            </div>
        </div>
    </div>
    
    </>
}