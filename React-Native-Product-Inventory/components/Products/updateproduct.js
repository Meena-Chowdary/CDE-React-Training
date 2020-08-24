import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Picker, Button } from 'react-native';
import {TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios';
import { globalstyles } from '../globalstyles/globalstyles';


export default function UpdateProduct({ route, navigation }) {

    const { items } = route.params
    const [name, setName] = useState(items.name);
    const [image, setImage] = useState(items.image)
    const [price, setPrice] = useState(items.price);
    const [category, setCategory] = useState(items.category);
    const [stock, setStock] = useState(items.stock);
    const [quantity, setQuantity] = useState(items.quantity);

    const submit = () => {
        let productBody = {
            "image": image,
            "name": name,
            "quantity": quantity,
            "category": category,
            "price": price,
            "stock": stock
        }
        axios.put("http://localhost:3000/products/" + items.id, productBody)
            .then(response => {
                console.log(response)
                console.log("Done")
                navigation.push("Home")
            }, error => {
                console.log(error)
            })
    }

    return (
        <View style={globalstyles.container}>
      <Text style={globalstyles.headerStyle}>Add Product</Text>
      <TextInput
        style={globalstyles.inputBoxStyle}
        defaultValue ={name}
        autoFocus placeholder="Enter Product Name"
        autoFocus onChangeText={value => setName(value)}>
      </TextInput>
      <TextInput
        defaultValue={image}
        style={globalstyles.inputBoxStyle}
        placeholder="Enter Product Image URL"
        onChangeText={value => setImage(value)}>
      </TextInput>

      <TextInput
        defaultValue={price}
        style={globalstyles.inputBoxStyle}
        placeholder="enter product price"
        keyboardType='numeric' onChangeText={value => setPrice(value)}>
      </TextInput>

      <TextInput
      defaultValue={quantity}
        style={globalstyles.inputBoxStyle}
        placeholder="enter product quantity"
        keyboardType='numeric' onChangeText={value => setQuantity(value)}>
      </TextInput>

      <Picker style={globalstyles.pickerStyle}
        defaultValue={category}
        selectedValue={category}
        onValueChange={currentCategory => setCategory(currentCategory)}>
        <Picker.Item label="--select--" value="--select--" />
        <Picker.Item label="Mobiles" value="Mobiles" />
        <Picker.Item label="Laptops" value="Laptops" />
        <Picker.Item label="Cameras" value="Cameras" />
      </Picker>

      <Picker style={globalstyles.pickerStyle}
        defaultValue={stock}
        selectedValue={stock}
        onValueChange={stock => setStock(stock)}>
        <Picker.Item label="--select--" value="--select--" />
        <Picker.Item label="Yes" value="Yes" />
        <Picker.Item label="No" value="No" />
      </Picker>

      <TouchableOpacity onPress={() => submit()}>
        <Text style={globalstyles.addBtnStyle}>Update Product</Text>
      </TouchableOpacity>
    </View>);
}