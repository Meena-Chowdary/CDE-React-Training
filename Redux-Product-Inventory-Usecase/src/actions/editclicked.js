const editClicked = function (product) {
    console.log(product);
    console.log("edit clicked")
    return (
        {
            type: "EDIT_PRODUCT",
            payload: product
        }
    )
}

export default editClicked