
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './header.css'; 
class Header extends React.Component {
    render() {
        return (
            <nav>
            <div className="logo">Stock Socially</div>
            <label for="btn" className="icon">
              <span className="fa fa-bars"></span>
            </label>
            <input type="checkbox" id="btn" />
            <ul>
              <li><a href="#">Home</a></li>
            </ul>
          </nav>
        );
    }
}

export default Header;
