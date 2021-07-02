


function Say(name:any):Function {
    return function (target:any,attr:any):any{
        console.log(name,target,attr,'---decorator---')
        return target
    }
}
export default Say