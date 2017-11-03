import React, {Component} from 'react';

class SinglePage extends Component {
    
        render() { 
            console.log('props', this.props);
            const {match} =this.props;
            return(
                <div>
                     {/*<Route path="/1" render={() => {
                        return (
                            <div> Je suis la page 1 et seulement 1</div>
                        )
                    }} /> */}
                    Je suis la page seule  : {match.params.id}
                </div>
            )
        }
    }

export default SinglePage;