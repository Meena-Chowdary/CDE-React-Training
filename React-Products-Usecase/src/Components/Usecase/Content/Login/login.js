import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const validEmailRegex = RegExp(
    /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
);
const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
};

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null,
            errors: {
                username: '',
                password: '',
            }
        };
    }
    handleChange = (event) => {
        event.preventDefault();
        const { id, value } = event.target;
        let errors = this.state.errors;

        switch (id) {
            case 'username':
                errors.username =
                    validEmailRegex.test(value)
                        ? ''
                        : 'Email is not valid!';
                break;
            case 'password':
                errors.password =
                    value.length < 8
                        ? 'Password must be at least 8 characters long!'
                        : '';
                break;
            default:
                break;
        }

        this.setState({ errors, [id]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm(this.state.errors)) {
            console.info('Valid Form')
        } else {
            console.error('Invalid Form')
        }
    }
    render() {
        const { errors } = this.state;
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
                    <form onChange={this.handleSubmit} noValidate>
                        <label>User Name</label> &nbsp;
                        <input type="email" id="username" style={inputStyle}
                            placeholder="User Name *" onChange={this.handleChange} required noValidate />
                        <br></br>
                        {errors.username.length > 0 && <span className='error'>{errors.username}</span>}
                        <br />
                        <label>Password</label> &nbsp; &nbsp;
                        <input type="password" style={inputStyle} id="password"
                            placeholder="Password *" onChange={this.handleChange} required noValidate />
                        <br /><br />
                        {errors.password.length > 0 && <span className='error'>{errors.password}</span>}
                        <br />
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

