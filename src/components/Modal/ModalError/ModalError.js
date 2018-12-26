import React from 'react';
import './ModalError.css'


const modalError = (props) => {
    return (
        <div 
            className="ModalError"
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }} onClick={props.click}>
            {props.children}
        </div>
    )
}

export default modalError