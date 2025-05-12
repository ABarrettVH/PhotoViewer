import React from "react";
import './PhotoViewer.css'


export function PhotoViewer(props) {
    return (
        <div>
            <img  className="topImage" src={props.src} ></img>
        </div>
    );
}