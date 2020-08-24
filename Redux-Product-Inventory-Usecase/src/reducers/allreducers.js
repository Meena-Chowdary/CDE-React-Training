import { combineReducers } from 'redux'

import allproductsreducer from './allproducts'
import productClickedReducer from './editproductclicked'

const allreducer = combineReducers({
    allproducts: allproductsreducer,
    editProductclicked: productClickedReducer
})

export default allreducer