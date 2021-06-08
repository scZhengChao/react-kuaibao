import thunk from "redux-thunk";  //配合改装dispatch 支持函数
import { applyMiddleware } from 'redux'

export default applyMiddleware(thunk)