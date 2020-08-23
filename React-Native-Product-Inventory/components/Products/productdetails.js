import React from 'react';
import { View, Text, Image } from 'react-native';
import Card from '../globalstyles/card';
import { globalstyles } from '../globalstyles/globalstyles';
import { Button } from 'react-native';

export default function ProductDetails({route}){
    return(
    <View>
        <Card>
        <Image
        source={{uri : route.params.image}}
        style={globalstyles.images}/>
        <Text>Product Name: {route.params.name}</Text>
        <Text>Product Price: {route.params.price}</Text>
        <Text>Product Category: {route.params.category}</Text>
        <Text>Stock Availability: {route.params.stock}</Text>
        <Text></Text>
        {/* <Button onPress={() => { navigation.navigate('Update', { updateProducts }) }} title="Update Product"/> */}
        <Button title='Delete' onPress={()=>console.log('deleted product is '+ route.params.name)}/>
        </Card>
    </View>
    )
}