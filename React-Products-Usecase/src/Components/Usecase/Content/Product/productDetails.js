import React from 'react';
class ProductDetails extends React.Component {
    constructor(props){
        super(props)
        this.state ={
        }
       
    }

    deleteCurrentProduct=()=>{
        console.log("delete product with id: " + this.props.id);
        this.props.deleteId(this.props.id)
    }

    editProductWithId=()=>{
        console.log("edit product with id: " + this.props.id);
        this.props.editId(this.props.id)
    }

    render() { 
        return ( 
            <tr>
                <td>{this.props.id} </td>
                <td>{this.props.name} </td>
                <td>{this.props.price}</td>
                <td>{this.props.category}</td>
                <td>
                    <button >Since + </button>
                </td>
                <td>
                    <button>Since - </button>
                </td>
                <td>
                    <button onClick={this.editProductWithId}>Edit</button>
                </td>
                <td>
                    <button onClick={this.deleteCurrentProduct}>Del</button>
                </td>
                
            </tr>    
        )
    }
}
 
export default ProductDetails;