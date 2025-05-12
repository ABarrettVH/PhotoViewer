import React from "react";
import './ImageSelector.css'
import { PhotoViewer } from "./PhotoViewer";


export function ImageSelector() {
    const imageUrls = getImageUrls();

    const handleButtonClick = () => {
    setImageUrl('path/to/image2.jpg'); // Update the state on button click
  };

     return (
        <div className="imageSelector">
            {imageUrls.map((image) => (
                <button onClick={handleButtonClick}>
                <img 
                    className="galleryItem"
                    src={image}
                    
                />
                </button>
            ))}
        </div>


     );
}

function changeImage() {
    //const imageUrls = getImageUrls();
    return (
        <div>
            Image Selected</div> 
    )
}

const brokenImages = [
    1, 24, 32, 36, 44, 47
];




function getImageUrls() {
    const urls = [];

    for (let i = 0; i < 50; i++) {
        if (!brokenImages.includes(i)) {
            const imageNumberString = i.toString().padStart(2, '0');
            urls.push(`https://picsum.photos/id/6${imageNumberString}/400/300.jpg`)
        }
    }

    return urls;
}

export const imageUrls = getImageUrls();