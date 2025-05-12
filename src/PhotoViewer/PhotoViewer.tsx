import React from "react";
import './PhotoViewer.css'
import { useState } from "react";
import './ImageSelector.css'



export function PhotoViewer(props: {srcUrl: string}) {

    return (
        <div>
            <img  className="topImage" src={props.srcUrl} alt='dynamic top image'></img>
        </div>
    );
}