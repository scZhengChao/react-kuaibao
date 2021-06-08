import React,{ PureComponent} from 'react'
import  {connect} from 'react-redux'
interface PropsType {
    store:any
}
interface  StateTypes {

}
const initMapStateToProps = (state:any)=>{
    return {
        store:state
    }
}
const initMapDispatchToProps = (dispatch:any)=>{
    return {

    }
}

@connect(initMapStateToProps,initMapDispatchToProps)
class Login extends PureComponent<PropsType,StateTypes>{
    constructor(props:PropsType) {
        super(props);
    }
    componentDidMount(){
        console.log(this.props.store,'---s--')
    }
    render(){
        return (
            <div>
                asgasfa
            </div>
        )
    }
}

export  default  Login