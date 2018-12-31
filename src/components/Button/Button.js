import React from 'react';
import './Button.css'
const button = (props) => (
    <button onClick={props.click} className="tc ma5 Button" >
        {props.children}
    </button>
)

export default button