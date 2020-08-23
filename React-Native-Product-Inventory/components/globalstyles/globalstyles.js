import { StyleSheet } from "react-native";

export const globalstyles = StyleSheet.create({
    textStyle:{
        fontSize:20,
        fontWeight:'bold',
        color:'red'
    },
    containerStyle:{
        padding: 20,
        flex:1
    },
    touchButtonContainer:{
        backgroundColor: 'pink',
        padding:10,
        margin:20,
        borderRadius:5
    },
    images:{
        width:200,
        height:200,
        flexDirection:'row',
        justifyContent:'center',
        paddingTop:16,
        marginTop:16,
        borderTopWidth:1
    },
    addBtnStyle: {
        color: '#007bff',
        backgroundColor: 'transparent',
        borderColor: '#007bff',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 1,
        margin: 5,
        padding: 10,
        fontWeight: "bold",
        textAlign: "center"
    },
    headerStyle: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center"
    },
    inputBoxStyle: {
        padding: 12,
        margin:5,
        backgroundColor: 'white',
        borderColor: '#ced4da',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 6
    },
    pickerStyle:{
        padding: 8,
        margin:5,
        backgroundColor:'white',
        borderColor: '#ced4da',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 6
    },
    pickerItemStyle:{
        margin:5
    },

    searchtext: {
        padding: 12,
        margin: 20,
        marginLeft: 10,  
        marginTop: 10,
        width: '80%'
      }
})