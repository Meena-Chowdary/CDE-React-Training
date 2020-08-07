import React from 'react';
class ProductDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    deleteCurrentProduct = () => {
        this.props.deleteId(this.props.id)
    }

    editProductWithId = () => {
        this.props.editId(this.props.id)
    }

    render() {
        const tableStyle = {
            padding: '15px 30px'
        }
        return (
            <tr>
                <td style={tableStyle}>{this.props.id} </td>
                <td style={tableStyle}>{this.props.name} </td>
                <td style={tableStyle}>{this.props.price}</td>
                <td style={tableStyle}>{this.props.category}</td>
                <td style={tableStyle}>{this.props.description}</td>
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