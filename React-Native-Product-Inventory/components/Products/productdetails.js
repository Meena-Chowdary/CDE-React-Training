import React,{ useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import Card from '../globalstyles/card';
import { globalstyles } from '../globalstyles/globalstyles';
import { Button } from 'react-native';
import axios from 'axios';

export default function ProductDetails({navigation, route}){
    const { item } = route.params

    const [image, setImage] = useState("")
    const [name, setName] = useState("")
    const [quantity, setQuantity] = useState(0)
    const [category, setCategory] = useState("Mobiles")
    const [price, setPrice] = useState(0)
    const [stock, setStock] = useState("")
    const [product, setProduct] = useState([])

    useEffect(() => {
        setImage(item.image)
        setName(item.name)
        setQuantity(item.quantity)
        setCategory(item.category)
        setPrice(item.price)
        setStock(item.stock)
        setProduct(item)
    })
    const deleteProduct = () => {
        console.log("Delete product with received id: " + item.id)
        axios.delete("http://localhost:3000/products/" + item.id)
            .then(response => {
                console.log(response.data);
                navigation.push("Home")
            }, error => { console.log(error);})
    }
    return(
    <View>
        <Card>
        <Image
        source={{uri : image}}
        style={globalstyles.images}/>
        <Text>Product Name: {name}</Text>
        <Text>Product Price: {price}</Text>
        <Text>Product Category: {category}</Text>
        <Text>Stock Availability: {stock}</Text>
        <Text>Product Quantity: {quantity}</Text>
        <Text></Text>
        <Button
                    title="Update" style={globalstyles.addBtnStyle}
                    onPress={()=>navigation.navigate("Update",{items:product})}
                ></Button>
                <Text></Text>
                <Text></Text>
        <Button
                    title="Delete" style={globalstyles.addBtnStyle}
                    onPress={()=>deleteProduct}
                ></Button>
        </Card>
    </View>
    )
}