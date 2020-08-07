import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';
class Login extends React.Component {
    state = {}
    render() {
        const bodyStyle = {
            backgroundImage: `url("images/img1.jpg")`,
            backgroundRepeat: 'no-repeat',
            position: 'fixed',
            width: '100%',
            height: '100%',
            backgroundSize: 'cover',
            textAlign:'center'
        }
        const inputStyle = {
            padding:'10px',
            marginTop:'20px',
            textAlign:'center',
            background:'rgb(189, 188, 188)',
            border:'0px'
        }
    return(
        <div style={bodyStyle}>
        <div class="login">
            <form name="form">
                        <div>
                            <label>User Name</label> &nbsp;
                            <input type="text" id="username" style={inputStyle}
                                placeholder="User Name *" required/>
                        </div><br/>
                        <div>
                        <label>Password</label> &nbsp; &nbsp;
                            <input type="password"  style={inputStyle}
                                placeholder="Password *"  required/>
                        </div><br/>
                        <Link to="/dashboard">
                            <button type="button" style={{padding:'10px 20px',backgroundColor: '#0000FF',
                            color: 'white',cursor:'pointer',border:'none'}}>
                                LogIn
                            </button>
                        </Link>
                       <br/><br/>
                        <Link to="/register" style={{ textDecoration:'none', marginBottom:'30px'}}>Register</Link>
            </form>
            </div>
        </div>
        );
    }
}




export default Login;
