import React from 'react';
import { Button } from "react-bootstrap";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import addProductBroadcast from '../actions/addproduct';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
}
class AddProduct extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            category: '',
            vendor:'',
            price: 0,
            quantity: 0,
            stock: '',
            image: '',
            errors: {
                nameError: '',
                priceError: '',
                qtyError: '',
                vendorError:'',
                catError: '',
                imgError: '',
                stockError: ''
            },
            buttonStatus: true
        }
    }
    handleSubmit = e => {
        e.preventDefault()
        if (validateForm(this.state.errors)) {
            this.setState({ buttonStatus: false })
        } else {
            this.setState({ buttonStatus: true })
        }
    }
    checkValidation = () => {
        let errors = this.state.errors
        if (this.state.name === '') {
            this.setState({ buttonStatus: true })
            errors.nameError = 'Product Name must not be empty'
            return false
        }
        if (this.state.image === '') {
            this.setState({ buttonStatus: true })
            errors.imgError = 'Please attach image'
            return false
        }
        if (this.state.price === 0) {
            this.setState({ buttonStatus: true })
            errors.priceError = 'Price field cannot be empty'
            return false
        }

        if (this.state.category === '') {
            this.setState({ buttonStatus: true })
            errors.catError = 'Please select respective category'
            return false
        }
        if (this.state.vendor === '') {
            this.setState({ buttonStatus: true })
            errors.vendorError = 'Please enter Brand Name'
            return false
        }
        if (this.state.quantity === 0) {
            this.setState({ buttonStatus: true })
            errors.qtyError = 'Please enter quantity'
            return false
        }
        if (this.state.stock === '') {
            this.setState({ buttonStatus: true })
            errors.stockError = 'Stock field cannot be empty'
            return false
        }

        return true
    }

    getName = (event) => {
        let errors = this.state.errors;
        errors.nameError = "" || (!event.target.value.match(/^([a-zA-Z0-9_-]+)$/)) ? " Product Name shouldn't be empty" : ""
        this.setState({ name: event.target.value })
    }

    getPrice = (event) => {
        let errors = this.state.errors;
        errors.priceError = (!event.target.value.match(/^(?:0|[1-9]\d*)(?:\.(?!.*000)\d+)?$/)) ? "Price is invalid!!" : ""
        this.setState({ price: event.target.value })
    }

    getQuantity = (event) => {
        let errors = this.state.errors;
        errors.qtyError = (!event.target.value.match(/^(?:0|[1-9]\d*)?$/)) ? "Quantity is invalid!!" : ""
        this.setState({ quantity: event.target.value })
    }

    getCategory = (event) => {
        this.setState({ category: event.target.value })
    }
    getVendor = (event) => {
        let errors = this.state.errors;
        errors.vendorError = "" || (!event.target.value.match(/^([a-zA-Z0-9_-]+)$/)) ? "Vendor Name shouldn't be empty" : ""
        this.setState({ vendor: event.target.value })
    }
    getStock = (event) => {
        this.setState({ stock: event.target.value })
    }
    getImage = (event) => {
        this.setState({ image: event.target.value.substr(12) })
    }
    allProducts() {
        axios.get("http://localhost:3000/products")
            .then(response => {
                console.log(response)
                this.props.newProduct(response.data)
            }, error => {
                console.log(error)
            })
    }
    addProduct = () => {
        if (this.checkValidation()) {
            let product = {
                name: this.state.name,
                image: this.state.image,
                price: this.state.price,
                category: this.state.category,
                vendor:this.state.vendor,
                quantity: this.state.quantity,
                stock: this.state.stock
            }
            axios.post("http://localhost:3000/products", product)
                .then(response => {
                    console.log(response)
                    this.allProducts()
                }, error => {
                    console.log(error)
                })

        }

    }
    render() {

        const { errors } = this.state;
        const textStyle = {
            width: '40%',
            padding: '12px 20px'
        }
        const errorStyle = {
            color: 'red'
        }
        return (
            <div className="form">
                <form name="form" onChange={this.handleSubmit} style={{ margin: '60px', backgroundColor: '#f2f2f2', padding: '20px', textAlign: 'center' }}>
                    <h3>Add Product</h3>
                    <div className="name">
                        <label htmlFor="name"> Product Name</label> &emsp; &emsp; &emsp; &nbsp;
                            <input type="text" style={textStyle} id="name" onChange={this.getName}
                            placeholder="Product Name *" noValidate />
                        <br></br>
                        {errors.nameError.length > 0 && (
                            <span style={errorStyle} className="error">{errors.nameError}</span>
                        )}
                    </div><br />
                    <div>
                        <label>Product Image: </label> &emsp; &ensp;
                        <input type="file" style={textStyle} onChange={this.getImage} multiple accept='images/*' />
                        <br></br>
                        {errors.imgError.length > 0 && (
                            <span className="error">{errors.imgError}</span>
                        )}
                    </div> <br></br>
                    <div className="price">
                        <label htmlFor="price">Product Price</label> &emsp;&emsp;&emsp; &ensp; &nbsp;
                            <input
                            type="number" name="price" style={textStyle} id="price" onChange={this.getPrice} required
                            placeholder="Product Price *"
                            noValidate />
                        <br></br>
                        {errors.priceError.length > 0 && (
                            <span style={errorStyle} className="error">{errors.priceError}</span>
                        )}
                    </div><br />
                    <div className="category">
                        <label htmlFor="category"> Product Category</label> &ensp;&emsp;&emsp;
                            <select defaultValue={this.state.selectValue} id="category" style={textStyle}
                            onChange={this.getCategory} noValidate
                        >
                            <option value="">--select--</option>
                            <option value="Mobiles">Mobiles</option>
                            <option value="Laptops">Laptops</option>
                            <option value="Cameras">Cameras</option>
                        </select>
                        <br></br>
                        {errors.catError.length > 0 && (
                            <span style={errorStyle} className="error">{errors.catError}</span>
                        )}
                    </div><br />
                    <div className="brand">
                        <label htmlFor="name"> Vendor Details</label> &emsp; &emsp; &emsp; &nbsp;
                            <input type="text" style={textStyle} id="vendor" onChange={this.getVendor}
                            placeholder="Vendor Details *" noValidate />
                        <br></br>
                        {errors.vendorError.length > 0 && (
                            <span style={errorStyle} className="error">{errors.vendorError}</span>
                        )}
                    </div><br />
                    <div className="quantity">
                        <label htmlFor="quantity">Product Quantity</label> &emsp;&emsp; &nbsp;&nbsp;
                            <input
                            type="number" name="quantity" style={textStyle} id="quantity" onChange={this.getQuantity} required
                            placeholder="Product Quantity *"
                            noValidate />
                        <br></br>
                        {errors.qtyError.length > 0 && (
                            <span style={errorStyle} className="error">{errors.qtyError}</span>
                        )}
                    </div><br />
                    <div className="stock">
                        <label htmlFor="stock">Product Stock</label> &emsp; &emsp;&emsp; &ensp;
                        <select defaultValue={this.state.selectValue} id="stock" style={textStyle}
                            onChange={this.getStock}
                        >
                            <option value="">--select--</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                        <br></br>
                        {errors.stockError.length > 0 && (
                            <span style={errorStyle} className="error">{errors.stockError}</span>
                        )}
                    </div><br />
                    <div>
                        <Link to='/product'>
                            <Button variant="primary" disabled={this.state.buttonStatus} onClick={this.addProduct}>Add</Button>
                        </Link>
                    </div>
                    <br />
                </form>
            </div>
        );
    }
}

function eventDispatch(dispatch) {
    return bindActionCreators({ newProduct: addProductBroadcast }, dispatch)
}

export default connect(null, eventDispatch)(AddProduct)