import React from "react";
import "../css/login.css";
import "../css/main.css";
class RegisterScreen extends React.Component {
    render() {
        return (
            <center>
            <div className="login_box login_shadow ">
              <h1>Sign up</h1>
              <hr />
              <form id='login_form' method="POST" action='/outlook-autoreply/login/'>
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
                      <input name='Password1' className="Field" type="password" placeholder="Confirm Password" required />
                  </div>
                  <div className="inputContainer">
                      <i className="fa fa-key icon"> </i>
                      <input name='Email' className="Field" type="text" placeholder="Email" required />
                  </div>
                  <ul className="messages text-danger">
                      <li>Sign up error</li>
                  </ul>
                  <button type="submit" value="Submit" className='mybutton_hover btn btn-primary btn-lg active btn-block' role="button" aria-pressed="true">Sign up</button>
              </form>
              <div className="strike strik_padding">
                  <span><b>Admin Access</b></span>
              </div>
          </div>
      </center>
        );
    }
}

export default RegisterScreen;