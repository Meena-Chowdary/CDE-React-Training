import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Login/login';
import Home from './Home/home';
import Register from './Register/register';
import Products from './Product/products';
import EditProduct from './Product/editProduct';
import AddProduct from './Product/addProduct';



class Content extends React.Component {
    state = {}
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={Login}></Route>
                    <Route path='/dashboard' component={Home}></Route>
                    <Route path='/product' component={Products}></Route>
                    <Route path='/add' component={AddProduct}></Route>
                    <Route path='/register' component={Register}></Route>
                    <Route path='/edit' component={EditProduct}></Route>
                </Switch>
            </div>
        );
    }
}

export default Content;