import React, { Component } from 'react';
import MainContainer from './maincontainer.jsx'
import Navbar from './navbar.jsx';

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="app">
                <Navbar />
                <MainContainer />
            <button>why hello</button>
            </div>
        )
    }
}

export default App;