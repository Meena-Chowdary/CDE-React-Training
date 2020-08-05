import React from 'react';
import { Link } from 'react-router-dom';
class AddProduct extends React.Component {
    state = {  }
    add = () => {
        alert('Product Added!!')
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
                        <label> Description</label> &nbsp;
                            <input type="text" style={textStyle} required min="5"
                                placeholder="Product Description *"  />
                        </div><br/>
                        <div>
                        <label> Category</label> &nbsp;
                            <select id="category" name="category" style={textStyle}>
                                <option value="select">--select--</option>
                                <option value="mobiles">Mobiles</option>
                                <option value="laptops">Laptops</option>
                                <option value="cameras">Cameras</option>
                            </select>
                            
                        </div><br/>
                        <div>
                        <label> Price</label> &nbsp;
                            <input type="text" style={textStyle} required placeholder="Product Price *"
                                 />
                        </div><br/>
                        
                        <div>
                            <input type="submit" style={{padding:'10px 15px',backgroundColor: '#4CAF50',
                            color: 'white',cursor:'pointer',border:'none'}} value="Add" />
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