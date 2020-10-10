import React from "react";
import { 
    BrowserRouter as Router, 
    Route, 
    Link, 
    Switch 
} from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.css';
import './header.css'; 
import LoginScreen from 'Container/Login/LoginContainer/LoginScreen';
import RegisterScreen from 'Container/Register/RegisterContainer/RegisterScreen';
class Header extends React.Component {
    render() {
        return (
            <Router>
            <header className="header">
            <h1 className="logo"><a href="#">CodingBeast</a></h1>
            <ul className="main-nav">
                <li><a href="/">Home</a></li>
                <li><Link to="/login/">Login</Link></li>
                <li><Link to="/register/">Register</Link></li>
            </ul>
        </header> 
              <Route path="/login/" component={LoginScreen}  title="Login"/>
              <Route path="/register/" component={RegisterScreen}  title="Register"/>
      </Router>

        );
    }
}

export default Header;