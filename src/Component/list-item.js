import React, {Component} from 'react';
import {Card, Button} from 'react-materialize';
import {Link} from 'react-router-dom';

class ListItem extends Component {

    render() { 
        return(
            <div>
                <Card
                    title={this.props.date}>
                    <div>{this.props.start}</div>
                    <div>{this.props.end}</div>
                    <div>
                    <Button waves="light"><Link to={`/${this.props.id}`}>Plus de détails</Link></Button>
                    </div>
                </Card>
            </div>
        )
    }
}



export default ListItem;