import React from 'react';
import { Link } from 'react-router-dom';
import './register.css';
import { Button } from 'reactstrap';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            confirmpassword: '',
            invalidUser: '',
            invalidPassword: '',
            invalidConfirmPassword: '',
            users: [],
            validUser: true
        }
    };
    signUp = e => {
        let signupRequestBody = {
            "username": this.state.username,
            "password": this.state.password,
            "confirmpassword": this.state.confirmpassword
        }
        axios.post('http://localhost:3000/users', signupRequestBody)
            .then(response => {
                this.props.history.push('/')
            }, error => {
                console.error(error)
            })

    }
    getUserName = (event) => {
        if (event.target.value.includes('@')) {
            this.setState({ invalidUser: false, username: event.target.value })
        } else {
            this.setState({ invalidUser: true })
        }
    }
    getPassword = (event) => {
        if (event.target.value === '') {
            this.setState({ invalidPassword: true })
        } else {
            this.setState({ invalidPassword: false, password: event.target.value })
        }
    }
    getConfirmPassword = (event) => {
        if (event.target.value !== this.state.password) {
            this.setState({ invalidConfirmPassword: true })
        } else {
            this.setState({ invalidConfirmPassword: false, confirmpassword: event.target.value })
        }
        this.validsubmit();
    }

    validsubmit = () => {
        if (this.state.invalidUser || this.state.invalidPassword || this.state.invalidConfirmPassword) {
            this.setState({ validUser: false })
        } else {
            this.setState({ validUser: true })
        }
        return this.state.validUser
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
            marginTop: '10px',
            textAlign: 'center',
            background: 'rgb(189, 188, 188)',
            border: '0px'
        }
        return (
            <div style={bodyStyle}>
                <div class="register">
                    <form name="form" noValidate>
                        <h3>Register</h3>
                        <div>
                            <label> User Name </label> &nbsp;
                            <input type="email" style={textStyle} id="username"
                                placeholder="User Name *" onChange={this.getUserName} noValidate required /> <br />
                            {this.state.invalidUser && <span className='error'>Username is required,must contain '@'</span>}
                        </div><br />
                        <div>
                            <label> Password </label> &nbsp; &nbsp;
                            <input type="password" style={textStyle} id="password"
                                placeholder="Password *" onChange={this.getPassword} noValidate required /><br />
                            {this.state.invalidPassword && <span className='error'>Password is required</span>}
                        </div><br />
                        <div>
                            <label> Confirm </label> &nbsp; &nbsp;&nbsp;
                            <input type="password" style={textStyle} id="confirmpassword"
                                placeholder="Confirm Password *" onChange={this.getConfirmPassword} noValidate required /><br />
                            {this.state.invalidConfirmPassword && <span className='error'>Confirm Password should match with Password</span>}
                        </div><br />
                        <Link to='/'>
                            <Button color="info" onClick={this.signUp} disabled={this.state.validUser}>
                                Register
                            </Button>
                        </Link>
                        <br></br>
                    </form>
                </div>
            </div>
        );
    }

}
export default Register;