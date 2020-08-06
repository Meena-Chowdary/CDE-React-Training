import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Profile from '../Header/profile';
import Login from './Login/login';
import Home from './Home/home';

import AddProduct from './Product/addProduct';
import Register from './Register/register';
import Products from './Product/products';


class Content extends React.Component {
    state = {}
    render() {
        return (
            <div>
                <Switch>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/dashboard' component={Home}></Route>
                    <Route path='/products' component={Products}></Route>
                    <Route path='/profile' component={Profile}></Route>
                    <Route path='/add' component={AddProduct}></Route>
                    <Route path='/register' component={Register}></Route>
                </Switch>
            </div>
        );
    }
}

export default Content;