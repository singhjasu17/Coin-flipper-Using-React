import React,{Component} from 'react';
import './Coin.css'
class Coin extends Component
{
    static defaultProps={
        src:'https://tinyurl.com/react-coin-heads-jpg'
    }
    
    render()
    {
    return <img className={this.props.display} src={this.props.src}/>
    }

}
export default Coin;