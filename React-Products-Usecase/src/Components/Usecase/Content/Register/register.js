import React from 'react';
import { Link } from 'react-router-dom';
import './register.css';
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

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null,
            confirmpassword: null,
            errors: {
                username: '',
                password: '',
                confirmpassword: ''
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
            case 'confirmpassword':
                errors.confirmpassword =
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
        const textStyle = {
            padding: '10px',
            marginTop: '10px',
            textAlign: 'center',
            background: 'rgb(189, 188, 188)',
            border: '0px'
        }
        return (
            <div style={bodyStyle}>
                <div class="register">
                    <form name="form" onChange={this.handleSubmit} noValidate>
                        <h3>Register</h3>
                        <div>
                            <label> User Name </label> &nbsp;
                            <input type="email" style={textStyle} id="username"
                                placeholder="User Name *" onChange={this.handleChange} noValidate required /> <br />
                            {errors.username.length > 0 && <span className='error'>{errors.username}</span>}
                        </div><br />
                        <div>
                            <label> Password </label> &nbsp; &nbsp;
                            <input type="password" style={textStyle} id="password"
                                placeholder="Password *" onChange={this.handleChange} noValidate required /><br />
                                {errors.password.length > 0 && <span className='error'>{errors.password}</span>}
                        </div><br />
                        <div>
                            <label> Confirm </label> &nbsp; &nbsp;&nbsp;
                            <input type="password" style={textStyle} id="confirmpassword"
                                placeholder="Confirm Password *" onChange={this.handleChange} noValidate required /><br />
                                {errors.confirmpassword.length > 0 && <span className='error'>{errors.confirmpassword}</span>}
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
