import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Login/login';
import Register from './Register/register';
import Dashboard from './Dashboard/dashboard';
import AddProduct from './Products/addproduct';
import EditProduct from './Products/editproduct';
import Header from './Header/header';
import NavigationBar from './Header/navbar';
import Footer from './Header/footer';
import AllProducts from "./Products/allproducts";

function App() {
  return (
    <div>
      <Header/>
      <NavigationBar/>
      <div id="content">
        <Switch>
            <Route exact path='/' component={Login}></Route>
            <Route path='/register' component={Register}></Route>
            <Route path='/product' component={AllProducts}></Route>
            <Route path='/dashboard' component={Dashboard}></Route>
            <Route path='/add' component={AddProduct}></Route>
            <Route path='/edit' component={EditProduct}></Route>
        </Switch>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
