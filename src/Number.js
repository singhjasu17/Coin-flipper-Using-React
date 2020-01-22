import React,{Component} from 'react'
class Number extends Component
{
    constructor(props)
    {
        super(props);
    this.handleRemove=this.handleRemove.bind(this);
}
    handleRemove()
    {
        this.props.remove(this.props.value);

    }
    render()
    {
        return <li>
            {this.props.value}
            <button onClick={this.props.remove}>X</button>
        </li>
    }
}
export default Number;