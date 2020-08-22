const allproducts = function (product) {
    console.log(product);
    return (
        {
            type: "ALL_PRODUCT",
            payload: product
        }
    )
}

export default allproducts