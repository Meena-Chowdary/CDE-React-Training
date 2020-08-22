const productClickedBroadcast=function(product){
    console.log(product);
    return({
        type:"PRODUCT_CLICKED",
        payload:product
    })
}

export default productClickedBroadcast