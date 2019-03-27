import React, { Component } from 'react';
import Modal from '../components/Modal/Modal'
import Xikmad from '../components/Xikmad/Xikmad'
import Button from '../components/Button/Button'
import Icons from '../components/Icons/Icons'
import Scroll from '../components/Scroll/Scroll'
import Particles from 'react-particles-js'
import ErrorBoundry from './ErrorBoundry/ErrorBoundry'
import axios from '../axios-instance';
import Spinner from '../components/Spinner/Spinner'
import withError from '../components/withError/withError'
import * as actions from '../store/actions/index'
import Bar from '../components/AppBar/AppBar'
import { connect } from 'react-redux'
import './Quote.css';

class Machine extends Component {
  
  state = {
      current: '',
      currentBackgroud: '',
      text: '',
      lang: ''
  }
  

  componentDidMount() {
    this.props.req()
  }

   onLangChange = () => {
     setTimeout(() => {
      if (this.props.lang !== 'English') {
        this.props.history.push("/" + this.props.lang)
     } else {
         this.props.history.push("/")
     }
     }, 200)
     
   }

   changeMode = () => {
     this.props.onChangeToModes();
     document.querySelector('body').classList.toggle('dark')
   }

   clickHandlerMethod = () => {
    const lastUp = this.props.xikmado;
    
    let o = []
    for (let i = 1; i < 22; i++) {
      const j = 'Quote' + i.toString();
    
      o.push(lastUp[j])
    }
    
    
    this.setState({current: o[Math.floor(Math.random() * o.length)]})
    
    setTimeout(() => {
      this.setState({currentBackgroud: this.state.current.background})
    }, 500)

  } 
  render() {
    let filtred = this.props.xikmado ? Object.keys(this.props.xikmado).filter(igkey => {
      return this.props.xikmado[igkey].quote.toLowerCase().includes(this.state.text.toLowerCase())
    }): ["Not Found"]
    
    
    return (
      <React.Fragment>
      <Particles
                    className="particles"
                    params={{
                        "particles": {
                            "number": {
                                "value": 90
                            },
                            "size": {
                                "value": 5
                            }
                        },
                        "interactivity": {
                            "events": {
                                "onhover": {
                                    "enable": false,
                                    "mode": "repulse"
                                }
                            }
                        }
                }} />
      <div>
        <Bar 
          saveStarred={() => this.props.history.push('/starred')} 
          now="Starred"
          mySelf={() => this.props.history.push('/About')}
          onLangChange={(data) => {this.props.onLangChange(data); this.onLangChange()}}
          items={['Somali', 'Arabic']}
          lang={this.props.lang}
          onTextChange={(text) => {
            this.setState({text: text});
            this.setState({current: filtred.length > 0 ? this.props.xikmado[filtred[0]] : "Not Found"});
            setTimeout(() => {
              this.setState({currentBackgroud: this.state.current && this.state.current.background})
            }, 100)
          }}
          value={this.state.text}
          dark={this.props.dark}
          chaneMode={this.changeMode}/>
        <h1 className="tc animated bounce delay-1s">Random Quote Machine</h1>
          {this.props.xikmado ?
          <React.Fragment>
            <ErrorBoundry>
              <div className="tc App" >
              <Scroll currentBackgroudn={this.state.currentBackgroud}>
                <Modal>
                  <Xikmad 
                    xikmad={this.state.current ? this.state.current.quote: ''} 
                    quotesLength={this.props.xikmado.length}
                    icon="stars"
                    starred={this.props.starred}
                    clicked={this.props.star}/>
                    {/* <Audio /> */}
                  { this.state.current ? 
                    <Button click={this.clickHandlerMethod}>New One</Button>:
                    <Button click={this.clickHandlerMethod}>Start it</Button>
                    
                  }
                  <Icons />
                </Modal>
                </Scroll>
                </div>
                </ErrorBoundry></React.Fragment>:
               <Spinner />
               
          }
          
      </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  xikmado: state.quote.xikmado,
  starred: state.quote.starred,
  lang: state.lang.lang.textContent,
  dark: state.quote.dark
})
const mapDispatchToProps = (dispatch) => ({
  req: () => actions.onquoteRequest(dispatch),
  star: (text) => dispatch(actions.starred(text)),
  onLangChange: (lang) => dispatch(actions.langChange(lang)),
  onChangeToModes: () => dispatch(actions.darkMode())
})

export default connect(mapStateToProps, mapDispatchToProps)(withError(Machine, axios))
