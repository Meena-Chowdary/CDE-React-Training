import React from 'react';

class Footer extends React.Component {
    state = {  }
    render() { 
        const footerStyle = {
            background: 'rgb(36, 35, 35)',
            color: 'white',
            display: 'block',
            position: 'fixed',
            bottom: '0',
            left: '0',
            right: '0',
            textAlign: 'center'
        }
        return (
            <footer style={footerStyle}>
                <p>Copyright &copy;2020 <br/>Meena</p>
            </footer>
          );
    }
}
 
export default Footer;