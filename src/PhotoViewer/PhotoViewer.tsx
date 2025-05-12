import React from "react";
import './PhotoViewer.css'
import { useState } from "react";


export function PhotoViewer(props) {
    const [url, newUrl ] = useState(props.src);



    return (
        <div>
            <img  className="topImage" src={url} ></img>
        </div>
    );
}