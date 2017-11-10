import React, { Component } from 'react';
import Input from '../Component/input';
import {Button} from 'react-materialize'


export default class Search extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            du: "",
            au: ""
        }
    }

    update = (valueFromInput) => {
        this.setState({
            du: valueFromInput
        })
    }

    downdate = (valueFromInput) => {
        this.setState({
            au: valueFromInput
        })
    }

    pushdate = (evenement) => {
        this.props.callback(this.state.du, this.state.au)
    }

    render() { 
        return(
            <div>
                <Input name={"Du"} callback={this.update} />
                <Input name={"Au"} callback={this.downdate} />
                <Button waves='light' onClick={this.pushdate}>OK</Button>
            </div>
        )
    }
}