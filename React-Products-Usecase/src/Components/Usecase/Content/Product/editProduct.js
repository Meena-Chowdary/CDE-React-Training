import React from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import { Button } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid=false));
    return valid;
}
class EditProduct extends React.Component {
    constructor(props) {
        super(props)
        console.log(this.props);
        console.log(this.props.location);
        console.log(this.props.location.state);
        this.state = {
            productName: '',
            productPrice: 0,
            productImage: '',
            categoryName: '',
            description: '',
            stock:'',
            id: 0,
            errors: {
                nameError: '',
                priceError: '',
                descError: '',
                stockError:''
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
    checkValidation = () => {
        var splChars = "*|,\":<>[]{}`\';()@&$#%";
        if (this.state.productName === '' || this.state.name.includes(splChars)) {
            alert('Name field cannot be a blank or have special characters')
            return false
        }
        if(this.state.productImage === ''){
            alert('Please attach image')
            return false
        }
        if (this.state.productPrice === 0) {
            alert('Price field cannot be empty')
            return false
        }
        if (this.state.categoryName === '') {
            alert('Please choose respective Category')
            return false
        }
        if (this.state.stock === '') {
            alert('Stock cannot be empty')
            return false
        }
        if (this.state.description === '') {
            alert('Description field cannot be empty')
            return false
        }
        return true
    }

    componentWillMount() {
        if (this.props.location.state !== undefined) {
            axios.get('http://localhost:3000/products/' + this.props.location.state.myid)
                .then(response => {
                    //console.log(response);
                    this.setState({
                        productName: response.data.productName,
                        productPrice: response.data.productPrice,
                        productImage: response.data.productImage,
                        categoryName: response.data.categoryName,
                        description: response.data.description,
                        stock:response.data.stock,
                        id: response.data.id
                    })
                }, error => {
                    console.error(error);
                })
        }
    }

    getName = (event) => {
        let errors=this.state.errors;
        errors.nameError=""||(!event.target.value.match(/^([a-zA-Z0-9_-]+)$/))?"Product Name shouldn't be empty" : ""
        this.setState({ productName: event.target.value })
    }

    getPrice = (event) => {
        let errors=this.state.errors;
        errors.priceError = (!event.target.value.match(/^(?:0|[1-9]\d*)(?:\.(?!.*000)\d+)?$/)) ? "Price is invalid!!" : ""
        this.setState({ productPrice: event.target.value })
    }
    getStock = (event) => {
        let errors = this.state.errors
        errors.stockError = (!event.target.value.match(/^[1-9]+[0-9]*$/)) ? "Invalid stock amount !!" : ""
        this.setState({stock: event.target.value})
    }

    getCategory = (event) => {
        this.setState({ categoryName: event.target.value })
    }

    getDescription = (event) => {
        let errors=this.state.errors;
        errors.descriptionError = "" || event.target.value.trim().length === 0 ? " Product Description required !!" : ""
        this.setState({ description: event.target.value })
    }
    getImage = (event) => {
        this.setState({ productImage: event.target.value.substr(12) })
    }

    editProduct = () => {
        if(this.checkValidation){
        let productRequestBody = {
            "productName": this.state.productName,
            "productPrice": this.state.productPrice,
            "productImage": this.state.productImage,
            "categoryName": this.state.categoryName,
            "description": this.state.description,
            "stock":this.state.stock
        }
        axios.put('http://localhost:3000/products/' + this.state.id, productRequestBody)
            .then(response => {
                this.props.history.push('/product')
            }, error => {
                console.error(error);
            })
    }
}
    render() {
        const { errors } = this.state;
        const textStyle = {
            width: '40%',
            padding: '12px 20px',
            marging: '8px 0',
            display: 'inline-block'
        }
        if (this.props.location.state === undefined) {
            return (
                <h1> Please select correct product!!</h1>
            )
        }
        return (
            <div>
                <form onChange={this.handleSubmit} style={{ textAlign: 'center', margin: '60px', backgroundColor: '#f2f2f2', padding: '20px' }}>
                    <h3>Edit Product</h3>
                    <div>
                        <label>Product Id  </label> &emsp;  &emsp; &emsp; &nbsp;
                            <input type="text" style={textStyle} value={this.state.id} readOnly />
                    </div><br />
                    <div>
                        <label> Product Name</label> &emsp;  &emsp;
                            <input type="text" style={textStyle} id="productName" value={this.state.productName} onChange={this.getName} required
                        />
                        <br></br>
                            {errors.nameError.length > 0 && (
                                <span className="error">{errors.nameError}</span>
                              )}   
                    </div><br />
                    <div>
                        <label> Product Image</label> 
                            <input type="file" style={textStyle} id="productImage" onChange={this.getImage} required
                        />
                    </div><br />
                    <div>
                        <label> Product Price</label> &emsp;  &emsp; &nbsp;
                            <input type="text" style={textStyle} id="productPrice" value={this.state.productPrice} onChange={this.getPrice} required
                        />
                        <br></br>
                            {errors.priceError.length > 0 && (
                                <span className="error">{errors.priceError}</span>
                              )} 
                    </div><br />
                    <div>
                        <label> Product Category</label> &emsp;  

                        <select id="categoryName" value={this.state.categoryName} style={textStyle}
                            onChange={this.getCategory}
                        >
                            <option value="select">--select--</option>
                            <option value="Mobiles">Mobiles</option>
                            <option value="Laptops">Laptops</option>
                            <option value="Cameras">Cameras</option>
                        </select>
                    </div><br />
                    <div>
                        <label>Product Description</label> &nbsp;
                            <input type="text" style={textStyle} id="decription" value={this.state.description} onChange={this.getDescription} required
                        />
                        <br></br>
                            {errors.descError.length > 0 && (
                                <span className="error">{errors.descError}</span>
                              )}  
                    </div><br />
                    <div>
                        <label>Product Stock</label> &emsp; &emsp; &nbsp;
                            <input type="text" style={textStyle} id="decriptstockion" value={this.state.stock} onChange={this.getStock} required
                        />
                        <br></br>
                            {errors.stockError.length > 0 && (
                                <span className="error">{errors.stockError}</span>
                              )}  
                    </div><br />
                    <div>
                        <Button color="secondary" disabled={this.state.buttonStatus} onClick={this.editProduct}>Edit</Button>
                    </div>
                    <br />
                    <Link to="/product">
                        <Button color="danger">
                            Cancel
                            </Button>
                    </Link>
                </form>

            </div>
        );
    }
}

export default EditProduct;
