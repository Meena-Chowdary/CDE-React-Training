import React from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
class AddProduct extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            price: 0,
            category: '',
            description: '',
            buttonStatus: false
        }
    }
    getName = (event) => {
        this.setState({ name: event.target.value })
        this.checkValid()
    }

    getPrice = (event) => {
        this.setState({ price: event.target.value })
    }

    getCategory = (event) => {
        this.setState({ category: event.target.value })
    }

    getDescription = (event) => {
        this.setState({ description: event.target.value })
    }

    addProduct = () => {
        let productRequestBody = {
            "productName": this.state.name,
            "productPrice": this.state.price,
            "categoryName": this.state.category,
            "description": this.state.description
        }
        axios.post('http://localhost:3000/products', productRequestBody)
            .then(response => {
                // console.log(response);
                this.props.history.push('/product')
            }, error => {
                console.error(error);
            })
    }
    render() {
        const textStyle = {
            width: '40%',
            padding: '12px 20px',
            marging: '8px 0',
            display: 'inline-block'
        }
        return (
            <div>
                <form name="form" style={{ textAlign: 'center', margin: '60px', backgroundColor: '#f2f2f2', padding: '20px' }}>
                    <h3>Add Product</h3>
                    <div>
                        <label> Name</label> &nbsp;
                            <input type="text" style={textStyle} id="name" onChange={this.getName} required
                            placeholder="Product Name *" />
                    </div><br />
                    <div>
                        <label> Price</label> &nbsp;
                            <input type="text" style={textStyle} id="price" onChange={this.getPrice} required
                            placeholder="Product Price *"
                        />
                    </div><br />
                    <div>
                        <label> Category</label> &nbsp;
                            <input type="text" style={textStyle} id="category" onChange={this.getCategory} required
                            placeholder="Product Category *"
                        />
                    </div><br />
                    <div>
                        <label> Description</label> &nbsp;
                            <input type="text" style={textStyle} id="description" onChange={this.getDescription} required
                            placeholder="Product Description *"
                        />
                    </div><br />
                    <div>
                        <button type="button" style={{
                            padding: '10px 15px', backgroundColor: '#4CAF50',
                            color: 'white', cursor: 'pointer', border: 'none'
                        }} onClick={this.addProduct}>Add</button>
                    </div>
                    <br />
                    <Link to="/products">
                        <button type="button" disabled={this.state.buttonStatus} style={{ padding: '10px 15px', cursor: 'pointer' }}>
                            Cancel
                            </button>
                    </Link>
                </form>

            </div>
        );
    }
}

export default AddProduct;
