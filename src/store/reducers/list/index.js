const initStore = {
    name:'list'
}
export default  function listReducer(state=initStore,action){
    const {type,payload} = action
    switch (type) {
        case 'list/test1': {
            return payload
        }
        default: return state
    }
}