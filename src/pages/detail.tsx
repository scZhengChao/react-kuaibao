import React from 'react';
import Say from '../uitls/decorator/Say'
interface ISProps {

}

@Say('ts')
class Detail extends React.PureComponent<ISProps>{
    constructor(props:ISProps) {
        super(props);
        this.state = {

        }
    }
    @Say('eat')
    public eat = ()=>{

    }
    render() {
        return <div>
            hashfhasf
        </div>;
    }
}
export default Detail

