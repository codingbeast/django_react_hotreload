import React from "react";
import './register.css';
class RegisterScreen extends React.Component {
    componentDidMount(){
        document.title = "Register"
      }
    render() {
        return (
            <center>
            <div className="container  d-flex justify-content-center">
    <div className="login_box login_shadow">
        <h1>Register</h1>
        <hr />
        <form id='login_form' method="POST" action='/register/'>
            <div className="inputContainer">
                <i className="fa fa-user icon"> </i>
                <input name='Username' className="Field" type="text" placeholder="Username" required />
            </div>
            <div className="inputContainer">
                <i className="fa fa-key icon"> </i>
                <input name='Password' className="Field" type="password" placeholder="Password" required />
            </div>
            <div className="inputContainer">
                <i className="fa fa-key icon"> </i>
                <input name='Password2' className="Field" type="password" placeholder="Confirm Password" required />
            </div>
            <div className="inputContainer">
                <i className="fa fa-key icon"> </i>
                <input name='Email' className="Field" type="text" placeholder="Email" required />
            </div>
            <ul className="messages text-danger">
                Error
            </ul>
            <button type="submit" value="Submit" className='mybutton_hover btn btn-primary btn-lg active btn-block' role="button" aria-pressed="true">Sign up</button>
        </form>
        <div className="strike strik_padding">
            <span></span>
        </div>
    </div>
</div>
      </center>
        );
    }
}

export default RegisterScreen;