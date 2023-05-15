import React from 'react';
import "./Square.css";
function Square(props){
    return (
        <button className={props.className} onClick={props.onClick} aria-label={props.label} >
         {props.value}
        </button>
    );
};

export default Square;