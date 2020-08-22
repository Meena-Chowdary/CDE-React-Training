import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Alert } from 'react-bootstrap';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            username: '',
            password: '',
            wrongPassword: false,
            wrongUser: false,
            invalidUser: true,
            invlaidPassword: true
        };
    }
    login = () => {
        axios.get('http://localhost:3000/users')
            .then(response => {
                this.setState({ users: response.data })
                var loguser = this.state.users.find(user => user.username === this.state.username)
                if (loguser === undefined) {
                    this.setState({ wrongUser: true })
                } else {
                    if (loguser.password === this.state.password) {
                        this.setState({ username: loguser.username })
                        this.props.history.push('/dashboard')
                    } else {
                        this.setState({ wrongPassword: true })
                    }
                }
            }, error => { console.error(error); })

    }
    getUser = (event) => {
        this.setState({ wrongEmail: false })
        if (event.target.value.includes('@')) {
            this.setState({ invalidUser: false })
            this.setState({ username: event.target.value })
        } else {
            this.setState({ invalidUser: true })
        }
    }
    getPassword = (event) => {
        this.setState({ wrongPassword: false })
        if (event.target.value === '') {
            this.setState({ invalidPassword: true })
        } else {
            this.setState({ invalidPassword: false })
            this.setState({ password: event.target.value })
        }
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
                    <form noValidate>
                        <Alert>{this.state.wrongUser && <h3 className='error'>Invalid UserName</h3>}</Alert>
                        {this.state.wrongPassword && <h3 className='error'>Invalid Password</h3>}
                        <label>User Name</label> &nbsp;
                        <input type="email" id="username" style={inputStyle}
                            placeholder="User Name *" onChange={this.getUser} required noValidate /><br />
                        <br />
                        <label>Password</label> &nbsp; &nbsp;
                        <input type="password" style={inputStyle} id="password"
                            placeholder="Password *" onChange={this.getPassword} required noValidate />
                        <br /><br />
                        {this.state.invalidPassword && <span className='error'>Password is required</span>}
                        <br />
                        <Button color="primary" onClick={this.login} disabled={this.state.invalidUser || this.state.invalidPassword}>
                            LogIn
                        </Button>
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