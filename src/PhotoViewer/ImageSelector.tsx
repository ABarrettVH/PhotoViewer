import React from "react";
import './ImageSelector.css'



export function ImageSelector(props: {srcUrl: string, setNewUrl: (url: string) => void}) {
    const imageUrls = getImageUrls();
     return (
        <div className="imageSelector">
            {imageUrls.map((image) => (
                <button onClick = {()=> props.setNewUrl(image)}>
                    <img 
                        className="galleryItem"
                        src={image}
                    />
                </button>
            ))}
        </div>


     );
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