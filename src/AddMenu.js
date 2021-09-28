import React from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'


export default function AddItem (){

    const [menuItem,setMenuItem]=React.useState({});
    
    
   const handleSubmit = (e) => {
       e.preventDefault();
        // const foodname=document.getElementById('foodname').value;
        // const foodprice=document.getElementById('foodprice').value;
        // const foodtype=document.getElementById('foodtype').value;
        // const foodperiod=document.getElementById('foodperiod').value;
        // const menu={
        //     foodname:foodname,
        //     foodtype:foodtype,
        //     foodperiod:foodperiod,
        //     foodprice:foodprice
        // }
        // setMenuItem(menu);
        console.log(menuItem)
         axios.post("http://localhost:8099/menu/menusave", menuItem)
        .then(response => {
                console.log('servercalled');
            })
        
        
        }
        // componentDidMount(){
        // UserServices.getUsers().then((res)=>{
        //     this.setState({users:res.data})
        // });
        //  axios.get("http://localhost:8080/api/users").then((response)=>{
        //      this.setState({users:response.data})
        //  });
    // }
    // React.useEffect(()=>{
        
        
    //     axios.post("http://localhost:8080/chef/additem", menuItem)
    //     .then(response => {
    //             console.log('servercalled');
    //         })
            
    // },[menuItem])

    const onChange=(e)=>{
        
        setMenuItem(menu=>{
            return{
                ...menu,
                [e.target.name]:e.target.value
            }
        })
        // setMenuItem(...menuItem,{[e.target.name]:e.target.value})
        console.log(menuItem);
    }
    return(
        
        <div className="formmodal" >
            <Link to='/chef'>
               <button type="button">Back</button>
            </Link>
            
           
            <form action="cgef/additem" className="form-group" method="post" >
                <div className="form-group row">
                    <label htmlFor="foodName" className="col-sm-2 col-form-label">Food Name</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" name="foodName" id="foodname"  onChange={onChange}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="foodType" className="col-sm-2 col-form-label">Food Type</label>
                    <div className="col-sm-10">
                        <select className="form-control" name="foodType" id="foodtype" onChange={onChange}>
                            <option value="" >--</option>
                            <option value="Veg">Veg</option>
                            <option value="Non-Veg">Non-Veg</option>
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="foodPeriod" className="col-sm-2 col-form-label">Food Period</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" name="foodPeriod" id="foodperiod" onChange={onChange}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="foodPrice" className="col-sm-2 col-form-label">Food Price</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" name="foodPrice" id="foodprice" onChange={onChange} />
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="foodPrice" className="col-sm-2 col-form-label">Chef ID</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" name="chefId" id="foodprice" onChange={onChange} />
                    </div>
                </div>

                <button type="submit" className="btn btn-success" onClick={handleSubmit}> Add Item</button>
                <button className="btn btn-primary">Reset</button>
                
            </form>
        </div>
    )
    
}