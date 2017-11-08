import React, { Component } from 'react';
import List from '../Component/list';
import { ProgressBar, Button, Icon } from 'react-materialize';
import { Link } from 'react-router-dom';

class SinglePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        fetch('http://localhost:1337/' + this.props.match.params.id)
            .then(res => {
                return res.json()
            })
            .then(jsonData => {
                this.setState({
                    data: [jsonData],
                })
            })
            .catch((error) => {
                alert("Il y a eu une erreur")
            });
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            data: []
        })
        fetch('http://localhost:1337/' + newProps.match.params.id)
            .then(res => {
                console.log('Server response', res);
                return res.json()
            })
            .then(jsonData => {
                console.log('DATA FROM API', jsonData);
                this.setState({
                    data: [jsonData],
                })
            }).catch(error => {
                alert("Il y a eu une erreur")
            })

    }

    render() {
        return (
            <div>
                <div>
                    Je suis la page : {this.props.match.params.id}
                    {this.state.data.length === 0 ?
                        <ProgressBar /> :
                        <List data={this.state.data} />
                    }
                </div>
                <div>
                <Button waves="light"><Link to={`/`}><Icon
                
            >home</Icon></Link></Button>
                </div>
                <div>
                <Button waves="light"><Link to={`/${parseInt(this.props.match.params.id) + 1}`}><Icon
                            
                        >chevron_right</Icon></Link></Button>
                </div>
                {this.props.match.params.id > 1 &&
                    <div>
                        <Button waves="light"><Link to={`/${parseInt(this.props.match.params.id) - 1}`}><Icon
                        
                        >chevron_left</Icon></Link></Button>
                    </div>
                }
            </div>
        )
    }
}

export default SinglePage;