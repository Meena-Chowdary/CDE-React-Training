import {combineReducers} from 'redux'

import addfirstreducer from './addfirstreducer'
import addlastreducer from './addlastreducer'
import addscorereducer from './addscorereducer'

const combinedreducer = combineReducers({
    addfirstname:addfirstreducer,
    addlastname:addlastreducer,
    addscore:addscorereducer
})

export default combinedreducer