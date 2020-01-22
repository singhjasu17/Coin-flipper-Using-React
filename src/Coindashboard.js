import React,{Component} from 'react';
import Coin from './Coin'
import './Coindashboard.css'
class Coindashboard extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            headscount:0,
            tailscount:0,
            src:'https://tinyurl.com/react-coin-heads-jpg',
            display:'no'
        }
        this.generate=this.generate.bind(this);
    }
    generate()
    {
        const no=Math.round(Math.random());
        console.log(no);
        if(no==1)
        {
                this.setState((curState)=>
                {
                   return {
                        tailscount:curState.tailscount+1,
                        src:'https://tinyurl.com/react-coin-heads-jpg',
                        display:'yes'
                    }
                })
        }
        else
        {
            this.setState((curState)=>
            {
               return {
                    headscount:curState.headscount+1,
                    src:'https://tinyurl.com/react-coin-tails-jpg',
                    display:'yes'
                }
            })
   

        }

    }
    render()
    {
        return <div>
        <h1>Let's Flip a Coin</h1>
        <Coin src={this.state.src} display={this.state.display}/>
        <button onClick={this.generate}>Flip Me!</button>
        <p>Heads is {this.state.headscount} and tails is {this.state.tailscount}</p>
        </div>
        
    }

}
export default Coindashboard;