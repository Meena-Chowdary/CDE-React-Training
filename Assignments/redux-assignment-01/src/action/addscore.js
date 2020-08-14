const Addscore = function(score){
    return({
        type:'SCORE_ADD',
        payload:score
    })
}
export default Addscore