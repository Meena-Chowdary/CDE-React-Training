const addfirstreducer =function Addfirstname(state=null,action){
    console.log(action)
    switch(action.type){
        case 'FIRSTNAME_ADD':
            return action.payload
        default:
            break;    
    }
    return state
}
export default addfirstreducer