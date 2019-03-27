import React from 'react';

const inputField = (props) => (
    <div className="tc">
        <input 
            className="pa3 ba b--green bg-lightest-blue m4"
			type="search" 
            placeholder="Search Quotes"
            onChange={event => props.onTextChange(event.target.value)}
            value={props.value}
            disabled={props.disabled}
            />
    </div>
)

export default inputField