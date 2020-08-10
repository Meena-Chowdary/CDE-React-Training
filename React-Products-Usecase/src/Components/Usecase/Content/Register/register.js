import React from 'react';
import { Link } from 'react-router-dom';
import './register.css';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Register extends React.Component {
    register = () => {
        alert("Registered successfully")
    }


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
        const textStyle = {
            padding: '10px',
            marginTop: '20px',
            textAlign: 'center',
            background: 'rgb(189, 188, 188)',
            border: '0px'
        }
        return (
            <div style={bodyStyle}>
                <div class="register">
                    <form name="form" onSubmit={this.register}>
                        <h3>Register</h3>
                        <div>
                            <label> User Name </label> &nbsp;
                            <input type="text" style={textStyle} id="username"
                                placeholder="User Name *" required />
                        </div><br />
                        <div>
                            <label> Password </label> &nbsp;
                            <input type="password" style={textStyle}
                                placeholder="Password *" required />
                        </div><br />
                        <div>
                            <label> Confirm </label> &nbsp;
                            <input type="password" style={textStyle}
                                placeholder="Confirm Password *" required />
                        </div><br />
                        <Link to="/dashboard">
                            <Button color="info">
                                Register
                            </Button>
                        </Link><br></br>
                    </form>
                </div>
            </div>
        );
    }
}

export default Register;
