import { combineReducers } from 'redux'

import allproductsreducer from './allproducts'
import deleteClickedReducer from './deleteclicked'
import productClickedReducer from './editproductclicked'

const allreducer = combineReducers({
    allproducts: allproductsreducer,
    editProductclicked: productClickedReducer,
    deleteclicked: deleteClickedReducer
})

export default allreducer