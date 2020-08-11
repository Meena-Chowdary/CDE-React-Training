import React from 'react';
import ProductDetails from './productDetails';
import axios from "axios";
import { Container, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
class Products extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],
            productList: [],
            categoryProducts:[],
            searchValue: '',
            categoryValue:'',
            sortedProducts:[],
            myid: 0
        }
    }

    componentWillMount() {
        this.getAllProducts()
    }

    getAllProducts = () => {
        axios.get('http://localhost:3000/products')
            .then(response => {
                this.setState({ products: response.data })
                this.setState({categoryProducts:response.data})
            }, error => {
                console.error(error);
            })
    }
    categoryFilter=(event)=>{
        //this.setState({sortedProducts:this.state.categoryProducts.sort((a,b)=>{return a.stock-b.stock})})
        let categoryV=event.target.value
        if(categoryV!==' ')
        {
        this.setState({categoryValue:categoryV})
        let values=this.state.categoryProducts.filter(f=>{
            return f.categoryName.match(categoryV)
        })
        this.setState({products:values})
        
    }else{
            this.getAllProducts()
        }
    }
    search=(word)=>{
        this.setState({sortedProducts:this.state.products.sort((a,b)=>{return a.stock-b.stock})})
        if (word.target.value === "") {
            this.getAllProducts()
        }
        this.setState({ searchValue: word.target.value })
        let values = this.state.products.filter(e => {
            return (e.productName.toLocaleLowerCase().includes(word.target.value.toLocaleLowerCase())) ||
                (e.categoryName.toLocaleLowerCase().includes(word.target.value.toLocaleLowerCase()))
        })
        this.setState({ productList: values })
    }

    deleteProductWithId = (id) => {
        console.log('delete product for received id: ' + id);
        axios.delete('http://localhost:3000/products/' + id)
            .then(response => {
                this.setState({ deleteSuccess: true })
                this.getAllProducts()
                //this.intializeState()
            }, error => {
                console.error(error)
            })
    }

    renderAllProducts = () => {
        if (this.state.searchValue !== "") {
            if (this.state.productList.length === 0) {
                return (
                    <h5>"Sorry ! No Such Product Found !"</h5>)
            }
            else {
                return this.state.productList.map(product => {
                    return (
                        <Col sm='4' key={product.id}>
                            <ProductDetails
                                id={product.id}
                                name={product.productName}
                                image={product.productImage}
                                price={product.productPrice}
                                category={product.categoryName}
                                description={product.description}
                                stock={product.stock}
                                deleteId={this.deleteProductWithId}
                                editId={this.editProductWithId}
                            >
                            </ProductDetails>
                        </Col>
                    )
                })
            }
        }
        else {
            return this.state.products.map(product => {
                return (
                    <Col sm='4' key={product.id}>
                        <ProductDetails
                            id={product.id}
                            name={product.productName}
                            image={product.productImage}
                            price={product.productPrice}
                            category={product.categoryName}
                            description={product.description}
                            stock={product.stock}
                            deleteId={this.deleteProductWithId}
                            editId={this.editProductWithId}
                        >
                        </ProductDetails>
                    </Col>
                )
            })
        }

    }

    addProduct = () => {
        this.props.history.push('/add')
    }

    editProductWithId = (id) => {
        this.setState({ myid: id })
        console.log('Edit product with id: ' + id);
        this.props.history.push({
            pathname: '/edit',
            state: { myid: id }
        })
    }
    render() {
        const style = {
            margin: '40px'
        }

        const elementStyle = {
            autoFocus: 'true',
            padding: '10px',
            width: '75%',
            textAlign: 'center',
            marginBottom: '30px'
        }
        return (
            <div style={style}>
                <input type="text" name="search" style={elementStyle} placeholder="Enter item to be search" onChange={this.search} />&ensp;
                <label>Category  </label> &ensp;
                    <select id="category" name="Category :" 
                    defaultValue={this.state.selectValue} style={{width:'15%'}} onChange={this.categoryFilter}>
                            <option value="" selected={true}>Select</option>
                            <option value="Mobiles">Mobiles</option>
                            <option value="Laptops">Laptops</option>
                            <option value="Cameras">Cameras</option>
                    </select>
                <Container fluid>
                    <Row>
                        {this.renderAllProducts()}
                    </Row>
                </Container>

            </div>

        );
    }
}

export default Products;