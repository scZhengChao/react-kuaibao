const initStore = {
    name:'detail'
}
export default  function detailReducer(state=initStore,action){
    const {type,payload} = action
    switch (type) {
        case 'detail/test1': {
            return payload
        }
        default: return state
    }
}