import React, { Component } from 'react'
import Drawer from '../../components/Drawer/Drawer'
import { connect } from 'react-redux'

class Starred extends Component {
    render() {
        return (
            <div className="tc">
                <div style={{float: 'right', marginBottom: "20px"}}> 
                    <Drawer 
                        saveStarred={() => this.props.history.push('/')} 
                        now="HOME"
                        mySelf={() => this.props.history.push('/AboutMe')}/>
                </div>
                <h1>Here's your favorite Quotes</h1>
                {
                    this.props.starred.map(quote => {
                        return <li style={{lineHeight: "2em", fontFamily: 'Cinzel, serif', margin: "20px", padding: "20px", fontWeight: "700"}} key={quote}>{quote}</li>
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    xikmado: state.xikmado,
    starred: state.starred
})

export default connect(mapStateToProps)(Starred)