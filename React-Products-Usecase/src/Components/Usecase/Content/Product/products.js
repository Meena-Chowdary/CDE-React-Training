import React from 'react';
import ProductDetails from './productDetails';
import axios from "axios";
class Products extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],
            deleteSuccess: false,
            myid: 0
        }
    }
    intializeState = () => {
        setTimeout(() => {
            this.setState({ deleteSuccess: false })
        }, 2000)
    }

    componentWillMount() {
        this.getAllProducts()
    }

    getAllProducts = () => {
        axios.get('http://localhost:3000/products')
            .then(response => {
                this.setState({ products: response.data })
            }, error => {
                console.error(error);
            })
    }

    deleteProductWithId = (id) => {
        console.log('delete product for received id: ' + id);
        axios.delete('http://localhost:3000/products/' + id)
            .then(response => {
                this.setState({ deleteSuccess: true })
                this.getAllProducts()
                this.intializeState()
            }, error => {
                console.error(error)
            })
    }

    renderAllProducts = () => {
        return this.state.products.map(product => {
            return (

                <ProductDetails
                    key={product.id}
                    id={product.id}
                    name={product.productName}
                    price={product.productPrice}
                    category={product.categoryName}
                    description={product.description}
                    deleteId={this.deleteProductWithId}
                    editId={this.editProductWithId}
                >
                </ProductDetails>

            )
        })
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
        return (

            <div style={style}>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>

                        {this.renderAllProducts()}

                    </tbody>

                </table>
                <br></br>
                {this.state.deleteSuccess &&
                    <div>
                        <h3>Product deleted success!!!!</h3>
                    </div>
                } <br></br>
                <button style={style} onClick={this.addProduct}>Add Product</button>

            </div>

        );
    }
}

export default Products;

