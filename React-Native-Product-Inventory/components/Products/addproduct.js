import React, { useState } from 'react';
import { View, Text, Picker,TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { globalstyles } from '../globalstyles/globalstyles';

export default function AddProduct({navigation}) {

  const [name, setName] = useState('');
  const [image,setImage] = useState('')
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [stock, setStock] = useState('');
  const [quantity, setQuantity] = useState('');

  const addProduct = () => {
    var newProduct = {
      "name":name,
      "image":image,
      "price":price,
      "category":category,
      "stock":stock,
      "quantity":quantity
    }
    
    //axios.post('https://my-json-server.typicode.com/Meena-Chowdary/CDE-React-Training/products', newProduct)
    axios.post('http://localhost:3000/products',newProduct)
      .then(response => {
           alert('Product Added')
          navigation.push('Home')
      }).catch(err => {
        console.log(err)
        alert('Try again later')
      })
    
  }
  return (
    <View style={globalstyles.container}>
      <Text style={globalstyles.headerStyle}>Add Product</Text>
      <TextInput
        style={globalstyles.inputBoxStyle}
        autoFocus placeholder="Enter Product Name"
        autoFocus onChangeText={value => setName(value)}>
      </TextInput>
      <TextInput
        style={globalstyles.inputBoxStyle}
        placeholder="Enter Product Image URL"
        onChangeText={value => setImage(value)}>
      </TextInput>

      <TextInput
        style={globalstyles.inputBoxStyle}
        placeholder="enter product price"
        keyboardType='numeric' onChangeText={value => setPrice(value)}>
      </TextInput>

      <TextInput
        style={globalstyles.inputBoxStyle}
        placeholder="enter product quantity"
        keyboardType='numeric' onChangeText={value => setQuantity(value)}>
      </TextInput>

      <Picker style={globalstyles.pickerStyle}
        selectedValue={category}
        onValueChange={currentCategory => setCategory(currentCategory)}>
        <Picker.Item label="--select--" value="--select--" />
        <Picker.Item label="Mobiles" value="Mobiles" />
        <Picker.Item label="Laptops" value="Laptops" />
        <Picker.Item label="Cameras" value="Cameras" />
      </Picker>

      <Picker style={globalstyles.pickerStyle}
        selectedValue={stock}
        onValueChange={stock => setStock(stock)}>
        <Picker.Item label="--select--" value="--select--" />
        <Picker.Item label="Yes" value="Yes" />
        <Picker.Item label="No" value="No" />
      </Picker>

      <TouchableOpacity onPress={() => addProduct()}>
        <Text style={globalstyles.addBtnStyle}>Add Product</Text>
      </TouchableOpacity>
    </View>);
};