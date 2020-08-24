import React, { useState, useEffect } from "react";
import axios from 'axios';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { Button } from "react-native";
import { globalstyles } from "../globalstyles/globalstyles";
import Card from "../globalstyles/card";
import { ScrollView } from "react-native-gesture-handler";

export default function Products({ navigation }) {
    const [products, setProducts] = useState([])
    const [filter, setFilter] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/products')
            .then(response => {
                console.log(response.data);
                setProducts(response.data)
                setFilter(response.data)
            }, error => {
                console.log(error);
            })
    }, [navigation])

    function search(event) {
        let products = filter.filter((p) => {
            return (p.name.toLowerCase().includes(event.toLowerCase())|| (p.category.toLowerCase().includes(event.toLowerCase())) )  
        })
        setProducts(products)
    }
    
    return (
        <ScrollView styles={globalstyles.containerStyle}>
        <TextInput
                style={globalstyles.addBtnStyle}
                placeholder='Search by Product Name or by Category'
                onChangeText={search}
            ></TextInput>
            <Text> </Text>
        <View >
            <Button onPress={() => { navigation.navigate('Add') }} title="Add Product" />
                {
                    products.map(product => (
                        <View style={StyleSheet.cardContent} key={product.id.toString()}>
                            <TouchableOpacity onPress={() => navigation.navigate('ProductDetails', { item: product })}>
                                <Card>
                                    <Image
                                        source={{ uri: product.image }}
                                        style={globalstyles.images} />
                                        <Text> </Text>
                                    <Text> {product.name}</Text>
                                    <Text> </Text>
                                    <Text> {product.category}</Text>
                                </Card>
                            </TouchableOpacity>
                        </View>
                    )
                    )
                }
        </View>
        </ScrollView>
    )
}