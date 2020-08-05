import React from 'react';
import { Link } from 'react-router-dom';
class Register extends React.Component {
    state = {}
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
            textAlign:'center'
        }
const textStyle = {
            padding:'12px 20px',
           // display: 'inline-block'
        }
    return(
        <div style={bodyStyle}>
            <form name="form" onSubmit={this.register} style={{textAlign:'center',margin:'60px',backgroundColor:'#F1F1F1',padding:'10px'}}>
                <h3>Register</h3>
                        <div>
                            <label> User Name</label> &nbsp;
                            <input type="text" style={textStyle} id="username"
                                placeholder="User Name *" required/>
                        </div><br/>
                        <div>
                        <label> Password</label> &nbsp;
                            <input type="password" style={textStyle} 
                                placeholder="Password *"  required/>
                        </div><br/>
                        <div>
                        <label> Confirm Password</label> &nbsp;
                            <input type="password" style={textStyle} 
                                placeholder="Confirm Password *"  required/>
                        </div><br/>
                        <Link to="/dashboard">
                            <button type="button" style={{padding:'10px 20px',backgroundColor: '#0000FF',
                            color: 'white',cursor:'pointer',border:'none'}}>
                                Register
                            </button>
                        </Link>
            </form>
            
        </div>
        );
    }
}




export default Register;
