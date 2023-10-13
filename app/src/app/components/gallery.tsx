/**
 * Gallery component for showing images
 */

import { useEffect, useState } from "react"

export const Gallery = (props: { sources: string[] }) => {

    // Create state to index the current image
    const [currentImage, setCurrentImage] = useState<number>(1)

    // Get number of images
    const numberOfImages = props.sources.length

    // Create function to select a new image
    const rotateNewImage = () => currentImage === numberOfImages
        ? setCurrentImage(1)
        : setCurrentImage(currentImage + 1)

    // Rotate between them over time
    useEffect(() => {

        //Implementing the setInterval method 
        const interval = setInterval(rotateNewImage, 3000);

        //Clearing the interval 
        return () => clearInterval(interval);
    }, [currentImage]);

    // Present current image
    return <img
        src={props.sources[currentImage - 1]}
        className={`h-56 w-56 rounded-b-full 
            p-px border-t-4 border-double
        `}
        style={{ color: "#E0CA8D", borderColor: "#E0CA8D" }}
    />
}