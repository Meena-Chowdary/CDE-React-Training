import React from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
class AddProduct extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            name:'',
            price:0,
            category:''
        }
    }
    addProduct=()=>{
        console.log('Add product via axios and post')
        let productRequestBody = {
            "productName": this.state.name,
            "productPrice": this.state.price,
            "categoryName": this.state.category
        }
        axios.post('http://localhost:3000/products', productRequestBody)
                .then(response=>{
                    console.log(response);
                    this.props.history.push('/products')
                }, error=>{
                    console.error(error);
                })
    }    
render() { 
        const textStyle = {
            width:'40%',
            padding:'12px 20px',
            marging: '8px 0',
            display: 'inline-block'
        }
        return ( 
            <div>
            <form name="form" onSubmit={this.add} style={{textAlign:'center',margin:'60px',backgroundColor:'#f2f2f2',padding:'20px'}}>
                <h3>Add Product</h3>
                        <div>
                            <label> Name</label> &nbsp;
                            <input type="text" style={textStyle} id="productname" required min="2"
                                placeholder="Product Name *" />
                        </div><br/>
                        <div>
                        <label> Price</label> &nbsp;
                            <input type="text" style={textStyle} required placeholder="Product Price *"
                                 />
                        </div><br/>
                        <div>
                        <label> Category</label> &nbsp;
                            <input type="text" style={textStyle} required placeholder="Product Category *"
                                 />
                        </div><br/>
                        
                        <div>
                            <input type="submit" style={{padding:'10px 15px',backgroundColor: '#4CAF50',
                            color: 'white',cursor:'pointer',border:'none'}} value="Add" onClick={this.addProduct} />
                        </div>
                        <br/>
                        <Link to="/products">
                            <button type="button" style={{padding:'10px 15px',cursor:'pointer'}}>
                                Cancel
                            </button>
                        </Link>
            </form>
            
        </div>
         );
    }
}
 
export default AddProduct;
