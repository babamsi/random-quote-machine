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
import TemporaryDrawer from '../components/Drawer/Drawer'
import * as actionType from './../store/action'
import { connect } from 'react-redux'

import './Quote.css';

class Machine extends Component {
  
  state = {
      starred: [],
      current: '',
      currentBackgroud: '',
      text: ''
  }
  

  componentDidMount() {
    //this.setState({xikmado: xikmadi})
    // axios.get('Quotes.json')
    //     .then(response => {
    //       //console.log(Object.keys(response.data.Quote1).map(igkey => response.data.Quote1[igkey]))
    //       this.setState({xikmado: response.data})
           
    //     }).catch(err => {
    //       console.log(err)
    //   })
    this.props.req()
  }
  onStarredHandler = (text) => {
      
      //  const filtEr = Object.keys(this.props.xikmado).map(igkey => {
      //    return this.props.xikmado[igkey]
      //  }).filter(item => {
      //    return item.quote === text
      //  }).reduce((sum, ele) => {
      //    return ele
      //  }, 0)
      //  let realFilter = this.state.starred.filter(elem => {
      //    return elem === filtEr.quote
      //  })
      //  if (realFilter.length < 1) {
      //   this.setState(prevState => {
      //     return {
      //       starred: prevState.starred.concat(filtEr.quote)
      //     }
      //   })
      //  } else {
      //    const data = this.state.starred.filter(quote => {
      //      return quote !== text
      //    })
      //    this.setState({starred: data})
      //  }
       
      //  const starred = [...this.state.starred]
      //  const duplicate = starred.filter(txt => txt === text);
      //  if (duplicate.length < 1) {
          
      //     return this.setState(prevState => {
      //       return {
      //         starred: prevState.starred.concat(text)
      //       }
      //     })
      //  }
      //   const rem = starred.filter(txt => txt !== text);
      //   if(rem.length >= 0) {
      //     return this.setState({starred: rem})
      //   }
      
      // console.log(this.state.starred)

    }
   clickHandlerMethod = () => {
    const lastUp = this.props.xikmado;
    
    let o = []
    for (let i = 1; i < 18; i++) {
      const j = 'Quote' + i.toString();
    
      o.push(lastUp[j])
    }
    
    
    this.setState({current: o[Math.floor(Math.random() * o.length)]})
    
    setTimeout(() => {
      this.setState({currentBackgroud: this.state.current.background})
    }, 500)

  } 
  render() {
    
   // console.log(this.state.another[0])
    let filtred = this.props.xikmado ? Object.keys(this.props.xikmado).filter(igkey => {
      return this.props.xikmado[igkey].quote.toLowerCase().includes(this.state.text.toLowerCase())
    }): []
    
    return (
      <div>
        <h1 className="tc animated bounce delay-1s">Random Quote Machine</h1>
    
          {this.props.xikmado ?
          <React.Fragment>
          <div style={{float: 'right', marginBottom: "20px"}}> 
          <TemporaryDrawer 
            saveStarred={() => this.props.history.push('/starred')} 
            now="Starred"
            mySelf={() => this.props.history.push('/AboutMe')}/>
          </div>

          <InputField 
              onTextChange={text => {
                // this.setState({current: this.state.xikmado[filtred].quote})
                this.setState({text: text})
                this.setState({current: this.props.xikmado[filtred[0]]})
              }}
              value={this.state.text}/>

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
                  { this.state.current.length <= 0 ? <Button click={this.clickHandlerMethod}>Start it</Button>:
                    <Button click={this.clickHandlerMethod}>New One</Button>
                  }
                  <Icons />
                </Modal>
                </Scroll>
                </div>
                </ErrorBoundry></React.Fragment>:
               <Spinner />
               
          }
          
      </div>
    );
  }
}

const mapStateToProps = state => ({
  xikmado: state.xikmado,
  starred: state.starred
})
const mapDispatchToProps = (dispatch) => ({
  req: () => actionType.onquoteRequest(dispatch),
  star: (text) => dispatch({type: actionType.STARRED, payload: text})
})

export default connect(mapStateToProps, mapDispatchToProps)(withError(Machine, axios))
