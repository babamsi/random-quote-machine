import React from 'react';
import './Xikmad.css'

const xikmad = (props) => (
    <React.Fragment>
        <div onClick={() => props.clicked(props.xikmad.toString())}>
            <i 
            className="material-icons ma-4 pa-2 Phone" 
            style={{cursor: 'pointer', color: props.starred.includes(props.xikmad)? "yellow" : "black"}}>
         {props.xikmad ? "stars" : ""}
        </i>
        </div>
        <div className="Xikmad animated bounce delay-1s Arabic">
            {props.xikmad}
        </div>
    </React.Fragment>
);

export default xikmad;