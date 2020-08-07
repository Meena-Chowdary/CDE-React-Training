import React from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
class EditProduct extends React.Component {
    constructor(props) {
        super(props)
        console.log(this.props);
        console.log(this.props.location);
        console.log(this.props.location.state);
        this.state = {
            productName: '',
            productPrice: 0,
            categoryName: '',
            description: '',
            id: 0
        }
    }

    componentWillMount() {
        if (this.props.location.state !== undefined) {
            axios.get('http://localhost:3000/products/' + this.props.location.state.myid)
                .then(response => {
                    //console.log(response);
                    this.setState({
                        productName: response.data.productName,
                        productPrice: response.data.productPrice,
                        categoryName: response.data.categoryName,
                        description: response.data.description,
                        id: response.data.id
                    })
                }, error => {
                    console.error(error);
                })
        }
    }

    getName = (event) => {
        this.setState({ productName: event.target.value })

    }

    getPrice = (event) => {
        this.setState({ productPrice: event.target.value })
    }

    getCategory = (event) => {
        this.setState({ categoryName: event.target.value })
    }

    getDescription = (event) => {
        this.setState({ description: event.target.value })
    }

    editProduct = () => {
        let productRequestBody = {
            "productName": this.state.productName,
            "productPrice": this.state.productPrice,
            "categoryName": this.state.categoryName,
            "description": this.state.description
        }
        axios.put('http://localhost:3000/products/' + this.state.id, productRequestBody)
            .then(response => {
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
        if (this.props.location.state === undefined) {
            return (
                <h1> Please select correct product!!</h1>
            )
        }
        return (
            <div>
                <form style={{ textAlign: 'center', margin: '60px', backgroundColor: '#f2f2f2', padding: '20px' }}>
                    <h3>Edit Product</h3>
                    <h1>Edit Product with id:{this.props.location.state.myId}</h1>
                    <div>
                        <label> Id : </label> &nbsp;
                            <input type="text" style={textStyle} value={this.state.id} readOnly />
                    </div><br />
                    <div>
                        <label> Name</label> &nbsp;
                            <input type="text" style={textStyle} id="productName" value={this.state.productName} onChange={this.getName} required
                        />
                    </div><br />
                    <div>
                        <label> Price</label> &nbsp;
                            <input type="text" style={textStyle} id="productPrice" value={this.state.productPrice} onChange={this.getPrice} required
                        />
                    </div><br />
                    <div>
                        <label> Category</label> &nbsp;
                            <input type="text" style={textStyle} id="categoryName" value={this.state.categoryName} onChange={this.getCategory} required
                        />
                    </div><br />
                    <div>
                        <label> Description</label> &nbsp;
                            <input type="text" style={textStyle} id="decription" value={this.state.description} onChange={this.getDescription} required
                        />
                    </div><br />
                    <div>
                        <button type="button" style={{
                            padding: '10px 15px', backgroundColor: '#4CAF50',
                            color: 'white', cursor: 'pointer', border: 'none'
                        }} onClick={this.editProduct}>Edit</button>
                    </div>
                    <br />
                    <Link to="/product">
                        <button type="button" style={{ padding: '10px 15px', cursor: 'pointer' }}>
                            Cancel
                            </button>
                    </Link>
                </form>

            </div>
        );
    }
}

export default EditProduct;
