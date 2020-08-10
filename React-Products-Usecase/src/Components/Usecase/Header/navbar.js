import React from 'react';
import { Link } from 'react-router-dom';

class NavigationBar extends React.Component {
    state = {}
    render() {
        const menuitem = {
            display: 'inline',
            padding: '20px'
        }
        const navStyle = {
            backgroundColor: '#F1F1F1',
            padding: '2px'
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
                        <Link to='/product' style={linkStyle}>Category</Link>
                    </li>
                    <li style={menuitem}>
                        <Link to='/add' style={linkStyle}>Add Product</Link>
                    </li>
                    <li style={menuitem}>
                        <Link to='/' style={loginStyle}>Login</Link>
                    </li>
                </ul>
            </div>

        );
    }
}

export default NavigationBar;
