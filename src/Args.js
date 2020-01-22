import React,{Component} from 'react';
class Args extends Component
{
    static defaultProps=
    {
        colors:['red','blue','green','yellow']
    }


    constructor(props)
    {
        super(props);
        this.state={
            color:'white'
        }
    }
    handleClick(n)
    {
        this.setState((curState)=>
        {
            return {color:n}
        })
    }
    render(){
        return <div style={{backgroundColor:this.state.color}}> 
    {this.props.colors.map(n=>
        {
            const obj={backgroundColor:n}
            return <button style={obj} onClick={this.handleClick.bind(this,n)}></button>
        })}
        </div>
    }

}
export default Args;
