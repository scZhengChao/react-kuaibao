const initStore = {
    name:'login'
}
export default  function loginReducer(state=initStore,action){
    const {type,payload} = action
    switch (type) {
        case 'login/test1': {
            return payload
        }
        default: return state
    }
}