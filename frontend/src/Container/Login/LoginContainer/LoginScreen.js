import React from "react";
import "./login.css";
import "css/main.css";
class LoginScreen extends React.Component {
    componentDidMount(){
        document.title = "Login"
      }
    render() {
        return (
            <center>
            <div className="container  d-flex justify-content-center">
    <div className="login_box login_shadow">
        <h1>Log in</h1>
        <hr />
        <form id='login_form' method="POST">
            <div className="inputContainer">
                <i className="fa fa-user icon"> </i>
                <input name='Username' className="Field" type="text" placeholder="Email" required />
            </div>
            <div className="inputContainer">
                <i className="fa fa-key icon"> </i>
                <input name='Password' className="Field" type="password" placeholder="Password" required />
            </div>
            <ul className="messages text-danger">
                Error
            </ul>

            <button type="submit" value="Submit" className='mybutton_hover btn btn-primary btn-lg active btn-block' role="button" aria-pressed="true">Login</button>
        </form>
        <div className="strike strik_padding">
            <span>or</span>
        </div>
    </div>
</div>
      </center>
        );
    }
}

export default LoginScreen;