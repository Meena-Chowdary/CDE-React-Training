
const allproductsreducer = function allProductsReducer(state = null, action) {
    var products = []
    switch (action.type) {
        case "ADD_PRODUCT":
            return action.payload

        case "PRODUCT_CLICKED":
            return state

        case "ALL_PRODUCT":
            console.log("All products loaded !")
            console.log(action.payload)
            return action.payload

        case "DELETE_PRODUCT":
            return state

        case "EDIT_PRODUCT":
            return action.payload
        default:
            break;
    }
    return products
}

export default allproductsreducer