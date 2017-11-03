import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import HomePage from './page/HomePage';
import SinglePage from './page/SinglePage';
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route path="/" exact component= {HomePage}/>
                    <Route path="/:id" component= {SinglePage}/>
                </div>
            </Router>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

