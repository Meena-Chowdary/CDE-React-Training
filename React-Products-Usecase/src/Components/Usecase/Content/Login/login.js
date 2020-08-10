import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
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
            textAlign: 'center'
        }
        const inputStyle = {
            padding: '10px',
            marginTop: '20px',
            textAlign: 'center',
            background: 'rgb(189, 188, 188)',
            border: '0px'
        }
        return (
            <div style={bodyStyle}>
                <div className="login">
                    <form>
                        <label>User Name</label> &nbsp;
                        <input type="text" id="username" style={inputStyle}
                                placeholder="User Name *" required />
                        <br />
                        <label>Password</label> &nbsp; &nbsp;
                        <input type="password" style={inputStyle}
                                placeholder="Password *" required />
                        <br /><br/>
                        <Link to="/dashboard">
                            <Button color="primary">
                                LogIn
                        </Button>
                        </Link>
                        <br /><br />
                        <Link to="/register">
                            <Button color="link">
                                New User? Create Account
                        </Button>
                        </Link>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;

