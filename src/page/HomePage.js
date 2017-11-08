import React, { Component } from 'react';
import List from '../Component/list';
import {ProgressBar} from 'react-materialize';
import Search from '../Component/search';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    console.log(' fetch(http://localhost:1337)');
    this.apiCall('http://localhost:1337')
  }

  apiCall = (url) => {
    this.setState({
      data: []
    })
    
    fetch(url)
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

  getDates = (du, au) => {
    this.apiCall(`http://localhost:1337?from=${du}&to=${au}`)
 }


  render() {
    return (
      <div>
        <h2>Prochaines fermetures du pont</h2>
        <Search callback={this.getDates}/>
        {this.state.data.length === 0 ?
          <ProgressBar/> :
          <List data={this.state.data}/>
        }
      </div>
    );
  }
}

export default HomePage;
