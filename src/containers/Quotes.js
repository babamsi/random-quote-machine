import React, { Component } from 'react';
import Modal from '../components/Modal/Modal'
import Xikmad from '../components/Xikmad/Xikmad'
import Button from '../components/Button/Button'
import { xikmadi } from '../xikmadi'
import Icons from '../components/Icons/Icons'
import Scroll from '../components/Scroll/Scroll'
import './Quote.css';
import axios from '../axios-instance';

class App extends Component {
  
  state = {
      xikmado: null,
      current: '',
      currentBackgroud: ''
  }
  

  componentDidMount() {
    this.setState({xikmado: xikmadi})
    axios.get('https://suhayb-react-burger.firebaseio.com/ingredients.json')
        .then(response => {
           console.log(response.data)
        }).catch(err => {
          console.log(err)
      })
  }
   clickHandlerMethod = () => {
    const lastUp = this.state.xikmado
    this.setState({current: lastUp[Math.floor(Math.random() * lastUp.length)]})
    //this.setState({currentBackgroudn: this})

    setTimeout(() => {
      this.setState({currentBackgroud: this.state.current.background})
    }, 500)

  } 
  render() {
    let k = this.state.xikmado ? Math.floor(Math.random() * this.state.xikmado.length) + 1: null
    return (
      <div>
        <h1 className="tc animated bounce delay-1s">Random Quote Machine</h1>
      {this.state.xikmado ?
          <div className="tc App" >
          <Scroll currentBackgroudn={this.state.currentBackgroud}>
            <Modal >
              <Xikmad xikmad={this.state.current.name}/>
              {this.state.current.length <= 0 ? <Button click={this.clickHandlerMethod}>Start it</Button>:
                <Button click={this.clickHandlerMethod}>New One</Button>
              }
              <Icons />
            </Modal>
            </Scroll>
            </div>:
            <h1>dkjdldjl</h1>
      }
      </div>
    );
  }
}

export default App;
