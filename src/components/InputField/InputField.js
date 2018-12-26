import React from 'react';

const inputField = (props) => (
    <div className="tc">
        <input 
            className="pa3 ba b--green bg-lightest-blue"
			type="search" 
            placeholder="Search Quotes"
            onChange={event => props.onTextChange(event.target.value)}
            value={props.value}
            />
    </div>
)

export default inputField