import  {connect} from 'react-redux'
const  enHanceronnect = (MapStateToProps=_.noop,MapActionToProps=_.noop)=> connect(MapStateToProps,MapActionToProps,null,{forwardRef: true,pure:true,withRef:false})

export default enHanceronnect