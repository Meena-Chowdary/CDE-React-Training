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
            padding:'2px'
        }
        return (
            <div style={navStyle}>
            <ul style={{listStyleType:'none'}}>
                    <li style={menuitem}>
                         <Link to='/dashboard' style={{ textDecoration:'none'}}>DashBoard</Link>
                    </li>
                    <li style={menuitem}>
                         <Link to='/product' style={{ textDecoration:'none'}}>Category</Link>
                    </li>
                    <li style={menuitem}>
                        <Link to='/add' style={{ textDecoration:'none'}}>Add Product</Link>
                    </li>
                    <input type="text" style={{marginLeft:'780px'}}placeholder="Search.." />
                    <li style={menuitem}>
                        <Link to='/profile' style={{ textDecoration:'none'}}>Profile</Link>
                    </li>
                    <li style={menuitem}>
                        <Link to='/login' style={{ textDecoration:'none'}}>Login</Link>
                    </li>
            </ul>
            </div>
        );
    }
}

export default NavigationBar;
