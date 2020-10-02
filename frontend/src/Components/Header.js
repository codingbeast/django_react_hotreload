import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import '../css/header.css'
class Header extends React.Component {
    render() {
        return (
            <header className="header">
            <h1 className="logo"><a href="#">CodingBeast</a></h1>
            <ul className="main-nav">
                <li><a href="#">Home</a></li>
                <li><a href="#">Logout</a></li>
                <li><a href="#"><b>Access Name :</b>Raj</a></li>
            </ul>
        </header> 
        );
    }
}

export default Header;