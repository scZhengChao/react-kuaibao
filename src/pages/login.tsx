import React,{ PureComponent} from 'react'
import  {connect} from 'react-redux'
import CryptoJS from 'crypto-js'
import moment from 'dayjs'
interface PropsType {
    store:any,
    detail:any
}
interface  StateTypes {
    num:number
}
const connects: Function = connect;
@connects((state:any)=>{
    return {
        store:state,
        detail:state.detail || {}
    }
},(dispatch:any)=>{
    return {
        add:()=>dispatch({type:'list/test1',payload:{name:'login--dispatch'}})
    }
})
class Login extends PureComponent<PropsType,StateTypes>{
    constructor(props:PropsType) {
        super(props);
        this.state = {
            num:0,
        }
    }
    componentDidMount(){
        const password = this.getPasswordWithDate()
    }
    public getPasswordWithDate=()=>{
        const secret = moment().format('YYYY-MM-DD')
        var hash = CryptoJS.HmacSHA1("electroncabinet", secret).toString(CryptoJS.enc.Hex);
        const password = hash.substr(moment().day(),6)
        return password
    }
    render(){
        return (
            <div>

            </div>
        )
    }
}

export  default  Login