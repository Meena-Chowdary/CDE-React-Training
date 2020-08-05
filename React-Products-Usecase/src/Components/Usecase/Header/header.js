import React from 'react';

class Header extends React.Component {
    state = {  }
    render() { 
        const imageStyle = {
            width:'100px',
            float:'left'
        }
        const h2Style = {
            textAlign:'center'
        }
        const headerStyle = {
            backgroundColor:'black',
            color:'white',
            padding:'5px'
        }
        return ( 
            <div style={headerStyle}>
            <a href="/home">
            <img src = "/images/logo.png" alt="logo" style={imageStyle}/></a>
            <h2 style={h2Style}>Product Inventory System</h2>
            </div>
         );
    }
}
 
export default Header;