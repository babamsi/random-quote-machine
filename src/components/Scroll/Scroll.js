import React from 'react'

const scroll = (props) => {
	return (
		<div style={{overflowY: 'scroll', border: '1px solid black', width: '80%', height:'90vh', margin: '10px auto', background: props.currentBackgroudn}}>
			{props.children}
		</div>
	)
}

export default scroll;