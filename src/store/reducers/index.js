import {combineReducers} from 'redux'
import detail from './detail'
import list from './list';
import login from './login/'
import regester from './regester'


const reducers = {
    detail,
    list,
    login,
    regester
}
export default combineReducers(reducers)
