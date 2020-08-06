import React from 'react';
import ProductDetails from './productDetails';
import axios from "axios";
class Products extends React.Component {
    constructor(props){
        super(props)
        this.state={
            products:[],
            deleteSuccess:false,
            myid:0
        }
    }


    intializeState=()=>{
        setTimeout(()=>{
            this.setState({deleteSuccess: false})
        }, 2000)
    }

    componentWillMount(){
        this.getAllProducts()
    }

    componentDidMount(){
        console.log(this.props)    
    }

    getAllProducts=()=>{
        axios.get('http://localhost:3000/products')
                .then(response=>{
                    console.log(response);
                    console.log(response.data)
                    this.setState({products: response.data})
                    console.log(this.state.products);
                }, error=>{
                    console.error(error);
                })
    }

    deleteProductWithId=(id)=>{
        console.log('delete product for received id: ' + id);
        axios.delete('http://localhost:3000/products' + '/' + id)
                .then(response=>{
                     console.log(response)
                     this.setState({deleteSuccess: true})
                     this.getAllProducts()
                     this.intializeState()
                }, error=>{
                    console.error(error)
                })
    }

    renderAllProducts=()=>{
        return this.state.products.map(product=>{
            return(
              
                    <ProductDetails
                        key={product.productId}
                        id={product.productId}
                        name={product.productName}
                        price={product.productPrice}
                        category={product.categoryName}
                        deleteId={this.deleteProductWithId}
                        editId={this.editProductWithId}
                    >

                    </ProductDetails>
                
            )
        })
    }

    openAddProduct=()=>{
        this.props.history.push('/add')
    }

    editProductWithId=(id)=>{
        this.setState({myid: id})
        console.log('Edit product with id: ' + id);
        this.props.history.push({
                                    pathname: '/edit', 
                                    state: {myid: id}
                                })
    }
  
    render() { 
        return ( 
    
               <div>
                    <button onClick={this.openAddProduct}>Add Product</button>
                    <br></br>
                    <table border="1">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Category</th>
                                <th colSpan='4'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                        
                                {this.renderAllProducts()}
                        
                        </tbody>

                    </table>
                    {this.state.deleteSuccess &&
                    <div>
                          <h3>Product deleted success!!!!</h3>  
                    </div>
                    }
                </div>
      
         );
    }
}
 
export default Products;




