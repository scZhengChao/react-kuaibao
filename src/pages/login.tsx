import React,{ PureComponent} from 'react'
import CryptoJS from 'crypto-js'
import moment from 'dayjs'
import { Button } from 'antd';

import { ThemeContext} from '../context/themeContext'
import enHanceronnect from '../uitls/connect'
interface PropsType {
    store:any,
    name:string,
}
interface  StateTypes {
    num:number,
    password:string,
}

@enHanceronnect((state:any,ownProps:any)=>{
    return {
        name:state.detail.name || ''
    }
},(dispatch:any,ownProps:any)=>{
    return {
        add:(data)=>dispatch({type:'detail/test1',payload:{name:data}}),
        // actions:bindActionCreators(Object.assign({}, todoActionCreators, counterActionCreators), dispatch)

    }
})
class Login extends PureComponent<PropsType,StateTypes>{
    static contextType = ThemeContext
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
        const { add,} = this.props
        add(e.target.value)
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