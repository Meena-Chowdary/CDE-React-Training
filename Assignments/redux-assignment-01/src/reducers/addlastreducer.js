const addlastreducer = function(state=null,action){
    switch(action.type){
        case 'LASTNAME_ADD':
            return action.payload
        default:
            break;    
    }
    return state
}
export default addlastreducer