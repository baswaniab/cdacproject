import React from 'react';
import { useParams } from 'react-router';
import {useGlobalContext} from './context'

export default function Kitchen(){
    const {id}=useParams();
    const {kitchen}=useGlobalContext()
    const kitchenDetails=kitchen.find((item)=> item.id===id )
    if(kitchenDetails){
        return <img src={kitchenDetails.image} alt="" style={{width:"100%",height:"290px"}}></img>
    }
    else{
        return <h2>loading</h2>
    }
}
