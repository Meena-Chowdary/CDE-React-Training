import React, { useState, useEffect } from "react";
import axios from 'axios';
import { ScrollView, TouchableOpacity, View, Text, Image, StyleSheet } from "react-native";
import { Button } from "react-native";
import { globalstyles } from "../globalstyles/globalstyles";
import Card from "../globalstyles/card";

export default function Products({navigation}) {
    const [products, setProducts] = useState([])
    const [prevProducts, setPrevProducts] = useState([])

    useEffect(() => {
            axios.get('https://my-json-server.typicode.com/Meena-Chowdary/CDE-React-Training/products')
            .then(response => {
                console.log(response.data);
                setProducts(response.data)
                setPrevProducts(response.data)
            }, error => {
                console.log(error);
            })
    }, [])
    
    const addProducts = (prod) => {
        setProducts(prevProducts => {
          return [{
            key: products.length + 2,
            id: products.length + 2,
            name: prod.name,
            image:prod.image,
            price: prod.price,
            category: prod.category,
            quantity: prod.quantity,
            stock: prod.stock
          }, ...prevProducts]
        })
    
        setPrevProducts(products)
      }
    return (
        <View>
            <Button onPress={() => { navigation.navigate('Add', { addProducts }) }} title="Add Product" />
            <ScrollView>
                {
                    products.map(product => (
                        <View style={StyleSheet.cardContent} key={product.id.toString()}>
                            <TouchableOpacity onPress={()=>navigation.navigate('ProductDetails', product)}>
                                <Card>
                                <Image
                                    source={{ uri: product.image }}
                                    style={globalstyles.images} />
                                <Text>{product.name}</Text>
                                </Card> 
                            </TouchableOpacity>
                        </View>
                    )
                    )
                }
            </ScrollView>
        </View>
    )
}
