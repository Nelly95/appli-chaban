import React, { Component } from 'react';
import List from '../Component/list';
import {ProgressBar} from 'react-materialize';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    console.log(' fetch(http://localhost:1337)');
    fetch('http://localhost:1337')
      .then(res => {
        console.log('Server response',res);
        return res.json()
      })
      .then(jsonData => {
        console.log('DATA FROM API', jsonData);
        this.setState({
          data: jsonData,
        })
      })
  }

  render() {
    return (
      <div>
        <h2>Prochaines fermetures du pont</h2>
        {this.state.data.length === 0 ?
          <ProgressBar/> :
          <List data={this.state.data}/>
        }
      </div>
     
    );
  }
}

export default HomePage;
