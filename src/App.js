import React from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './HomeScreen'
import Navbar from './Navbar'
import Kitchen from './KitchenView'
import ChefContent from "./ChefPage";
import AddItem from './AddMenu';
import MenuPage from './menupage';
import UpdateMenu from './updatemenu';
import DeleteMenu from './deletemenu';
import SideNav from './navigator_inside_signin';
import Login from './login';
import UserInfo from './userinfo';
import ChefInfo from './personalinfo';
import ForgetPassword from './forgot.component';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Navbar />
          <Home />
        </Route>
        <Route path="/Kitchen/:id">
          <Navbar />
          <Kitchen />
        </Route>
        <Route exact path="/chef" >
          <Navbar />
          <ChefContent/>
        </Route>
        <Route path="/chef/additem">
          {/* <AddItem/> */}
          <Navbar />
          <MenuPage/>
        </Route>
        <Route path ="/chef/updateitem" >
          <Navbar />
          <UpdateMenu/>
        </Route>
        <Route path ="/chef/deleteitem" >
          <Navbar />
          <DeleteMenu/>
        </Route>
        <Route path ="/login" >
          <SideNav/>
          <Login/>
        </Route>
        <Route path ="/registration/user" >
          <SideNav/>
          <UserInfo/>
        </Route>
        <Route path ="/registration/chef" >
          <SideNav/>
          <ChefInfo/>
        </Route>
        <Route path ="/forgetpassword" >
          <SideNav/>
          <ForgetPassword/>
        </Route>

      </Switch>
    </Router>
    // <Home/>
  );
}

export default App;
