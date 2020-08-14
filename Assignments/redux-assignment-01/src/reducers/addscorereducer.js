const addscorereducer = function(state=null,action){
    switch(action.type){
        case "SCORE_ADD":
            return action.payload
        default:
            break
    }
    return state
}

export default addscorereducer;