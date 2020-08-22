const deleteClickedReducer = function deleteClickedBroadcast(state = null, action) {
    console.log("Broadcast action received");
    switch (action.type) {
        case "PRODUCT_CLICKED":
            console.log("Action with payload received")
            console.log(action.payload);
            return action.payload
        case "DELETE_PRODUCT":
            return action.payload
        case "ALL_PRODUCT":
            return state
        case "ADD_PRODUCT":
            return null
        case "EDIT_PRODUCT":
            return state
        default:
            break;
    }
    return state
}

export default deleteClickedReducer