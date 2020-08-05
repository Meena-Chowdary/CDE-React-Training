import React from 'react';

class PhotoDetail extends React.Component {
    constructor(props){
        super(props)
        this.state={}
    }
    render() { 
        return ( 
            <tr>
                <td>{this.props.id}</td>
                <td>{this.props.albumId}</td>
                <td>{this.props.title}</td>
            </tr>
         );
    }
}
 
export default PhotoDetail;