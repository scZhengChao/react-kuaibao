import React,{useContext} from 'react';
import {ThemeContext } from '../context/themeContext'
interface ISProps {

}
const List: React.FC<ISProps> = (props,children) => {
    const value = useContext(ThemeContext);
    console.log(value,'---value---')
    return (
        <div>
            asfasf
        </div>
    )
}
export default React.memo(List)
