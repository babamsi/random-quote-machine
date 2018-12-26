import React, { Component } from 'react';

class ErrorBoundry extends Component {
    state = {
        hasError: null
    }
    componentDidCatch(error, info) {
        this.setState({hasError: error})
    }
    render() {
        if(this.state.hasError) {
            return <p className="tc">OOPS!.. Something Went Wrong</p>
        } else {
            return this.props.children
        }
    }
}

export default ErrorBoundry