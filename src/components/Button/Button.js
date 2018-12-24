import React from 'react';
import './Button.css'
const button = (props) => (
    <button onClick={props.click} className="tc pa4 ma5 Button" >
        {props.children}
    </button>
)

export default button