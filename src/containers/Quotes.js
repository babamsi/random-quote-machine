import React, { Component } from 'react';
import Modal from '../components/Modal/Modal'
import Xikmad from '../components/Xikmad/Xikmad'
import Button from '../components/Button/Button'
import Icons from '../components/Icons/Icons'
import Scroll from '../components/Scroll/Scroll'
import ErrorBoundry from './ErrorBoundry/ErrorBoundry'
import axios from '../axios-instance';
import Spinner from '../components/Spinner/Spinner'
import withError from '../components/withError/withError'
import InputField from '../components/InputField/InputField'
import './Quote.css';

class Machine extends Component {
  
  state = {
      xikmado: null,
      current: '',
      currentBackgroud: '',
      text: ''
  }
  

  componentDidMount() {
    //this.setState({xikmado: xikmadi})
    axios.get('Quotes.json')
        .then(response => {
          //console.log(Object.keys(response.data.Quote1).map(igkey => response.data.Quote1[igkey]))
          this.setState({xikmado: response.data})
           
        }).catch(err => {
          console.log(err)
      })
  }
   clickHandlerMethod = () => {
    const lastUp = this.state.xikmado;
    let o = []
    for (let i = 1; i < 11; i++) {
      const j = 'Quote' + i.toString();
      console.log(j)
      o.push(lastUp[j])
    }
    console.log(o)
    
    this.setState({current: o[Math.floor(Math.random() * o.length)]})
    
    setTimeout(() => {
      this.setState({currentBackgroud: this.state.current.background})
    }, 500)

  } 
  render() {
   // console.log(this.state.another[0])
    let filtred = this.state.xikmado ? Object.keys(this.state.xikmado).filter(igkey => {
      return this.state.xikmado[igkey].quote.toLowerCase().includes(this.state.text.toLowerCase())
    }): []
    console.log(filtred)
    return (
      <div>
        <h1 className="tc animated bounce delay-1s">Random Quote Machine</h1>

         <InputField 
                onTextChange={text => {
                  // this.setState({current: this.state.xikmado[filtred].quote})
                  this.setState({text: text})
                  console.log(this.state.xikmado[filtred[0]])
                  this.setState({current: this.state.xikmado[filtred[0]]})
                }}
                value={this.state.text}/>

          {this.state.xikmado ?
          
            <ErrorBoundry>
              <div className="tc App" >
              
              
              <Scroll currentBackgroudn={this.state.currentBackgroud}>
                <Modal>
                  <Xikmad xikmad={this.state.current ? this.state.current.quote: ''}/>
                  {this.state.current && this.state.current.length <= 0 ? <Button click={this.clickHandlerMethod}>Start it</Button>:
                    <Button click={this.clickHandlerMethod}>New One</Button>
                  }
                  <Icons />
                </Modal>
                </Scroll>
                </div>
                </ErrorBoundry>:
               <Spinner />
          }
          
      </div>
    );
  }
}

export default withError(Machine, axios)
