import React from 'react';

class Header extends React.Component {
    state = {}
    render() {
        const imageStyle = {
            width: '80px',
            float: 'left'
        }
        const h2Style = {
            textAlign: 'center'
        }
        const headerStyle = {
            backgroundColor: 'black',
            color: 'white',
            padding: '10px'
        }
        return (
            <div style={headerStyle}>
                <img src="/images/logo.png" alt="logo" style={imageStyle} />
                <h2 style={h2Style}>Product Inventory System</h2>
            </div>
        );
    }
}

export default Header;