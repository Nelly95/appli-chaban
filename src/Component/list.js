import React, { Component } from 'react';
import ListItem from './list-item';



export default  class List extends Component {
    
    render() { 
        return(
            <div>
                {this.props.data.map((row, index) => <ListItem
                    date={row.date}
                    start={row.start}
                    end={row.end}
                    key={index}
                    id={row.id}
                />)}
            </div>
        )
    }
}