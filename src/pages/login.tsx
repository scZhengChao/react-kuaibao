import React,{ PureComponent} from 'react'
import  {connect} from 'react-redux'
import CryptoJS from 'crypto-js'
import moment from 'dayjs'
import { Button } from 'antd';
interface PropsType {
    store:any,
    name:string,
}
interface  StateTypes {
    num:number,
    password:string,
}
const connects: Function = connect;
@connects((state:any)=>{
    return {
        store:state,
        name:state.detail.name || ''
    }
},(dispatch:any)=>{
    return {
        add:(data)=>dispatch({type:'detail/test1',payload:{name:data}})
    }
})
class Login extends PureComponent<PropsType,StateTypes>{
    constructor(props:PropsType) {
        super(props);
        this.state = {
            num:0,
            password:'',
        }
    }
    componentDidMount(){
        this.getPasswordWithDate()
    }
    public handle = (e)=>{
        const { add,name} = this.props
        const data  = e.nativeEvent.data
        add(name+data)
    }
    public getPasswordWithDate=()=>{
        const secret = moment().format('YYYY-MM-DD')
        var hash = CryptoJS.HmacSHA1("electroncabinet", secret).toString(CryptoJS.enc.Hex);
        const password = hash.substr(moment().day(),6)
        this.setState({password})
    }
    render(){
        const { password } = this.state
        const { name } = this.props
        return (
            <div>
                <blockquote>{password}</blockquote>
                <input onChange={this.handle}/>
                <hr/>
                <Button type="primary" >Button</Button>
                <input value={name} readOnly={true} />
            </div>
        )
    }
}

export  default  Login