import React from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid=false));
    return valid;
}
class AddProduct extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            price: 0,
            category: '',
            description: '',
            image: '',
            errors: {
                nameError: '',
                priceError: '',
                descError: '',
            },
            buttonStatus: true
        }
    }

     handleSubmit = e => {
        e.preventDefault()
        if(validateForm(this.state.errors)){
            this.setState({buttonStatus:false})
        }else{
            this.setState({buttonStatus:true})
        }
    }

    getName = (event) => {
        let errors=this.state.errors;
        errors.nameError=""||(!event.target.value.match(/^([a-zA-Z0-9_-]+)$/))?"Product Name shouldn't be empty" : ""
        this.setState({ name: event.target.value })
    }

    getPrice = (event) => {
        let errors=this.state.errors;
        errors.priceError = (!event.target.value.match(/^(?:0|[1-9]\d*)(?:\.(?!.*000)\d+)?$/)) ? "Price is invalid!!" : ""
        this.setState({ price: event.target.value })
    }

    getCategory = (event) => {
        this.setState({ category: event.target.value })
    }

    getDescription = (event) => {
        let errors=this.state.errors;
        errors.descriptionError = "" || event.target.value.trim().length === 0 ? " Product Description required !!" : ""
        this.setState({ description: event.target.value })
    }

    getImage = (event) => {
        this.setState({ image: event.target.value.substr(12) })
    }

    addProduct = () => {
        let productRequestBody = {
            "productName": this.state.name,
            "productPrice": this.state.price,
            "categoryName": this.state.category,
            "description": this.state.description,
            "productImage": this.state.image
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
        const { errors } = this.state;
        const textStyle = {
            width: '40%',
            padding: '12px 20px',
            marging: '8px 0',
            display: 'inline-block'
        }
        return (
            <div>
                <form name="form"  onChange={this.handleSubmit} style={{ textAlign: 'center', margin: '60px', backgroundColor: '#f2f2f2', padding: '20px' }}>
                    <h3>Add Product</h3>
                    <div className="name">
                        <label htmlFor="name"> Product Name</label> &emsp;  &emsp;
                            <input type="text"  style={textStyle} id="name" onChange={this.getName}
                            placeholder="Product Name *" noValidate /> 
                            <br></br>
                            {errors.nameError.length > 0 && (
                                <span className="error">{errors.nameError}</span>
                              )}     
                    </div><br />
                    <div>
                        <label>Product Image: </label> 
                    <input type="file" style={textStyle} onChange={this.getImage} multiple accept='images/*' />
                    </div> <br></br>
                    <div className="price">
                        <label htmlFor="price"> Product Price</label> &emsp;  &emsp;  &nbsp;
                            <input 
                            type="text" name="price" style={textStyle} id="price" onChange={this.getPrice} required
                            placeholder="Product Price *"
                            noValidate />
                            <br></br>
                            {errors.priceError.length > 0 && (
                                <span className="error">{errors.priceError}</span>
                              )}  
                                
                    </div><br />
                    <div>
                        <label> Product Category</label> &emsp; 
                            <select defaultValue={this.state.selectValue} id="category" style={textStyle}
                            onChange={this.getCategory}
                        >
                            <option value="select">--select--</option>
                            <option value="Mobiles">Mobiles</option>
                            <option value="Laptops">Laptops</option>
                            <option value="Cameras">Cameras</option>
                        </select>
                    </div><br />
                    <div className="description">
                        <label htmlFor="description">Product Description</label> &nbsp;
                            <input 
                            type="text" name="description" style={textStyle} id="description" onChange={this.getDescription} required
                            placeholder="Product Description *"
                            noValidate /> 
                            <br></br>
                            {errors.descError.length > 0 && (
                                <span className="error">{errors.descError}</span>
                              )}  
                    </div><br />
                    <div>
                        <Button variant="primary" disabled={this.state.buttonStatus} onClick={this.addProduct}>Add</Button>
                    </div>
                    <br />
                    <Link to="/product">
                        <Button variant="danger" >
                            Cancel
                            </Button>
                    </Link>
                </form>

            </div>
        );
    }
}

export default AddProduct;
