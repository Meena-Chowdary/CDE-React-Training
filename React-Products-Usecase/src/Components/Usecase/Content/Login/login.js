import React from 'react';
import { Link } from 'react-router-dom';

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
const textStyle = {
            padding:'12px 20px',
           // display: 'inline-block'
        }
    return(
        <div style={bodyStyle}>
            <form name="form" style={{textAlign:'center',margin:'60px',backgroundColor:'#F1F1F1',padding:'10px'}}>
                <h3>LogIn</h3>
                        <div>
                            <label> User Name</label> &nbsp;
                            <input type="text" style={textStyle} id="username"
                                placeholder="User Name *" required/>
                        </div><br/>
                        <div>
                        <label> Password</label> &nbsp; &nbsp;
                            <input type="password" style={textStyle} 
                                placeholder="Password *"  required/>
                        </div><br/>
                        <Link to="/dashboard">
                            <button type="button" style={{padding:'10px 20px',backgroundColor: '#0000FF',
                            color: 'white',cursor:'pointer',border:'none'}}>
                                LogIn
                            </button>
                        </Link>
                       <br/><br/>
                        <Link to="/register" style={{ textDecoration:'none'}}>Register</Link>
            </form>
            
        </div>
        );
    }
}




export default Login;
