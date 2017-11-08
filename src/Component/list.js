import React, { Component } from 'react';
import ListItem from './list-item';



export default  class List extends Component {
    
    render() { 
        return(
            <div>
                {this.props.data.map(row => <ListItem
                    date={row.date}
                    start={row.start}
                    end={row.end}
                    key={row.id}
                    id={row.id}
                />)}
            </div>
        )
    }
}