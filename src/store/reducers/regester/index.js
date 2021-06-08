const initStore = {
    name:'regester'
}
export default  function regesterReducer(state=initStore,action){
    const {type,payload} = action
    switch (type) {
        case 'regester/test1': {
            return payload
        }
        default: return state
    }
}