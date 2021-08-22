import React from 'react';
import { useParams } from 'react-router';
import {useGlobalContext} from './context'

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
    return <img src={kitchenDetails.image} alt="" style={{width:"100%",height:"290px"}}></img>
}