import React, { Component } from 'react';


class Input extends Component {

    constructor(props){
        super(props)
        this.state = {
            value: ""
        }
    }

    updateValue = (evenement) => {
        this.setState({
            value: evenement.target.value
        })
        this.props.callback(evenement.target.value)
    }   
    
    render() { 
        return(
            <div>
                <p>{this.props.name}</p><input type="text" value={this.state.value} onChange={this.updateValue} />
            </div>
        )
    }
}

export default Input;