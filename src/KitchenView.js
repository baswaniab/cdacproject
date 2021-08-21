import React from 'react';
import { useParams } from 'react-router';
import {useGlobalContext} from './context'

export default function Kitchen(){
    const {id}=useParams();
    const {kitchen}=useGlobalContext();
    const kitchenDetail=kitchen.filter((item)=> item.id==id )
    // console.log(kitchen);
    return <>
        <img src={kitchenDetail[0].image} alt="" style={{width:"100%",height:"290px"}} />
    </>
}
