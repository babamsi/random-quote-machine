import React, { Component } from 'react'
import ModalError from '../Modal/ModalError/ModalError'

const withError = (WrappedCompnent, axios) => {
    return class extends Component {
        state = {
           
            error: null
        }
        componentWillMount() {
            this.resInterceptr =  axios.interceptors.response.use(response => response, error => {
                this.setState({error: error})
            })
            this.reqInterceptr =  axios.interceptors.request.use(req => {
                this.setState({error: null});
                return req  // if not return the request blocked
            })
            
        }
        cancelConfirmedHandler = () => {
            this.setState({error: null})
        }
        componentWillUnmount() {
            
            axios.interceptors.request.eject(this.reqInterceptr);
            axios.interceptors.response.eject(this.resInterceptr)
           
        }
        
        render() {
            
            return (
                <React.Fragment>
                    <ModalError 
                        show={this.state.error}
                        click={this.cancelConfirmedHandler}>
                        {this.state.error && this.state.error.message}
                    </ModalError>
                    <WrappedCompnent {...this.props}/>
                </React.Fragment>
            );
        }
    }
}

export default withError