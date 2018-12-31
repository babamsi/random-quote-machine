import React from 'react'
import './Scroll.css'

const scroll = (props) => {
	return (
		<div className="Scroll" style={{background: props.currentBackgroudn}}>
			{props.children}
		</div>
	)
}

export default scroll;