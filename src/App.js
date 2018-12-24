import React, { Component } from 'react';
import Quotes from './containers/Quotes'
import './App.css'

class App extends Component {
    render() {
        return(
            <div style={{height: '100%'}}>
                <Quotes />
            </div>
            
        )
    }
}

export default App;