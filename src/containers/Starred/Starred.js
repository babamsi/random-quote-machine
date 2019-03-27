import React, { Component } from 'react'
import * as actions from '../../store/actions/index'
import { connect } from 'react-redux'
import Bar from '../../components/AppBar/AppBar'

class Starred extends Component {
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
        this.props.onChangeModes();
        document.querySelector('body').classList.toggle('dark')
      }
    render() {
        return (
            <div className="tc">
            <Bar 
                saveStarred={() => this.props.history.push('/')} 
                now="Home"
                mySelf={() => this.props.history.push('/About')}
                onLangChange={(data) => {this.props.onLangChange(data); this.onLangChange()}}
                items={['Somali', 'Arabic']}
                lang={this.props.lang}
                title="Goto Home"
                disabled={true}
                chaneMode={this.changeMode}
                dark={this.props.dark}/>
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
    xikmado: state.quote.xikmado,
    starred: state.quote.starred,
    lang: state.lang.lang.textContent,
    dark: state.quote.dark
})
const mapDispatchToProps = dispatch => ({
    onLangChange: (lang) => dispatch(actions.langChange(lang)),
    onChangeModes: () => dispatch(actions.darkMode())
})

export default connect(mapStateToProps,mapDispatchToProps)(Starred)