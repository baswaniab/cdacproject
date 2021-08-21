import React,{useState,useContext,useEffect} from 'react'
import {kitchenProfile} from './data'

const AppContext=React.createContext()

const AppProvider = ({children})=>{
    const [kitchen,setKitchen]=useState([]);
    const getDetails=()=>{
        const kitchenDetails=kitchenProfile.map((item)=>{
            const {id,image}=item;
            return {
                id:id,
                image:image
            }
        })
        setKitchen(kitchenDetails);
    }
    useEffect(()=>{
        getDetails();
    },[])
   
    return (
        <AppContext.Provider value={{kitchen}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext=()=>{
    return useContext(AppContext)
}

export {AppContext,AppProvider}
