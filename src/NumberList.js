import React,{Component} from 'react';
import Number from  './Number'
class NumberList extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            nums:[1,2,3,4,5]
        }
        
    }
    remove(n)
    {
        this.setState((curState)=>
        {
            return {nums:curState.nums.filter(num => num!==n)}
        })
    }
render()
{
    let nums=this.state.nums.map(n=>
        {
            return <Number value={n} remove={()=>this.remove(n)}/>
        });
    return <ul>
        {nums}
    </ul>
}
}
export default NumberList;
