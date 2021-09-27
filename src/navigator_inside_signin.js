import React from 'react';
import './forgotpassword.css'
import { Login } from './login';
import Chefinfo from './personalinfo';
import Userinfo from './userinfo';
import {BrowserRouter as Router, Route, NavLink, Switch, Link} from "react-router-dom";
import './sidenavbar.css';

// import 'bootstrap/dist/css/bootstrap.min.css';
import Forgot from './forgot.component';


export default function NavigatorInsideSignin()
 {


    return (
        <div className="navi">
            {/* <Router> */}
              <div className="side-nav">
               <Link  to="/" className="links" title="Back to HOME page"> <i className="fa fa-arrow-left" aria-hidden="true"></i> &nbsp; HOME CHEF </Link> &nbsp; &nbsp; &nbsp;
               <Link activeClassName="active"  to="/login" className="links">  Log In </Link> &nbsp; &nbsp; &nbsp;
               <Link activeClassName="active"  to="/registration/user" className="links"> Sign Up </Link> &nbsp; &nbsp; &nbsp;
               <Link activeClassName="active"  to="/registration/chef" className="links" > Register for chef </Link> &nbsp; &nbsp; &nbsp;
               <Link activeClassName="active" to="/forgetpassword" className="links"> Forgot password </Link> &nbsp; &nbsp; &nbsp;
              </div>

            {/* <Switch className="disp">
               <Route exact path="/" component={Login} />
		       <Route  path="/form/personalinfo" component={Chefinfo}/>
			   <Route  path="/form/userinfo" component={Userinfo }/>
               <Route  path="/components/forgot.component" component={Forgot}/>         */}
	        {/* </Switch> */}
            {/* </Router>  */}


        </div>
    )
}
