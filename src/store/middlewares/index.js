import thunk from "redux-thunk";
import { applyMiddleware } from 'redux'
const filterNil = () =>next => action => {
    if (action) {
        next(action)
    }
}

export default applyMiddleware(thunk,filterNil)