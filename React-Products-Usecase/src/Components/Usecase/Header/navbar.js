import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class NavigationBar extends React.Component {
    render() {
        const menuitem = {
            display: 'inline',
            padding: '20px'
        }
        const navStyle = {
            backgroundColor: '#F1F1F1',
            padding: '10px'
        }
        const linkStyle = {
            textDecoration: 'none', color: 'black'
        }
        const loginStyle = {
            textDecoration: 'none', float: 'right', marginRight: '30px', color: 'black'
        }

        return (
            <div style={navStyle}>
                <ul style={{ listStyleType: 'none' }}>
                    <li style={menuitem}>
                        <Link to='/dashboard' style={linkStyle}>DashBoard</Link>
                    </li>
                    <li style={menuitem}>
                        <Link to='/product' style={linkStyle}>Products</Link>
                    </li>
                    <li style={menuitem}>
                        <Link to='/add' style={linkStyle}>Add Product</Link>
                    </li>
                    <li style={menuitem}>
                        <Link to='/' style={loginStyle}> Login</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default NavigationBar;
