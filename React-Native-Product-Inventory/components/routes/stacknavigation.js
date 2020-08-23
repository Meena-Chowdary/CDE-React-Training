import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Products from '../Products/products';
import ProductDetails from '../Products/productdetails';

import AddProduct from '../Products/addproduct';

const Stack = createStackNavigator()

function MyStackNavigator(){
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home' 
                            screenOptions={{
                                gestureEnabled:true,
                                headerStyle:{
                                    height:100
                                }
                                }} 
                                headerMode='float'>
                <Stack.Screen name="Home" component={Products}></Stack.Screen>
                <Stack.Screen name="ProductDetails" component={ProductDetails}></Stack.Screen>
                <Stack.Screen name="Add" component={AddProduct}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MyStackNavigator

