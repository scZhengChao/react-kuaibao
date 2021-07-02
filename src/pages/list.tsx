import React,{useContext} from 'react';
import {ThemeContext } from '../context/themeContext'
interface ISProps {

}
const List: React.FC<ISProps> = (props,children) => {
    const value = useContext(ThemeContext);
    return (
        <div style={value}>
            asfasf
        </div>
    )
}
export default React.memo(List)

