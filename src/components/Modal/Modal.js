import React from 'react';
import './Modal.css'


const modal = (props) => (
    <div className="Modal pa4 br3 ma3 dib grow shadow-s bw2" >
        {props.children}
    </div>
)

export default modal;