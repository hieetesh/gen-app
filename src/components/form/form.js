import React, {useState} from 'react';
import './form.css'
//import logo from '../../Assets/portfolio_logo_hitesh.png';

import Button from '../button/button';


function Form(props) {
    const [email, setEmail] = useState('');
  return (
    <div className="wrapper fadeInDown">
    <div id="formContent">
        <h2 className="active"> Sign In </h2>

        {/* <div className="fadeIn first">
        <img src={logo}  id="icon" alt="User Icon" />
        </div> */}

        <form>
            <input type="email" id="login-username" className="form-control"
            name="username" placeholder="Enter email"
            data-testid="email-input"
            value={email}
            onChange={e => setEmail(e.target.value)}
            autoFocus />

            <input id="login-password" type="password"
            placeholder="Enter password"
            />

            <Button id="login-button" className="btn btn-success button-style" label="Login"/>
        </form>
    </div>
    </div>
  );
}

export default Form;