import thunk from "redux-thunk";
import logger from "redux-logger";
import { applyMiddleware } from 'redux'
const filterNil = () =>next => action => {
    if (action) {
        next(action)
    }
}

export default applyMiddleware(thunk,filterNil,logger)