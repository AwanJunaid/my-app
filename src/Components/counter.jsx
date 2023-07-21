import React, { Component } from 'react';

class Counter extends Component {
// state={
//     value:this.props.counter.value    
// };

// handleIncreament=()=>{
//     this.setState({value:this.state.value+1 });
// };

   render() { 
        return ( 
            <div>
            <span  className={this.getBadges()}>{this.formateCount()}</span>
                   <button 
                   onClick={()=>this.props.onIncrement(this.props.counter)}
                    className="btn btn-primary btn-sm">
                    Increment
                    </button> 
                    
                    <button
                    onClick={()=>this.props.onDecrement(this.props.counter)}
                    className="btn btn-secondary btn-sm m-2">
                    Decrement
                    </button>

                    <button
                     onClick={()=>this.props.onDelete(this.props.counter.id)}
                    className="btn btn-danger btn-sm m-2">
                    Delete
                    </button>

               </div>    
        );
    }
    getBadges() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }
    
    formateCount(){
       const {value}=this.props.counter;
        return value===0 ? "Zero":value; 
    }
}

 
export default Counter;