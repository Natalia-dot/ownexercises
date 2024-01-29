import React, { useState } from 'react'
import { StyledCarrousel } from './styles'
import { imagesArray } from '../media/data'


export const Carrousel = () => {
    const [activeImage, setActiveImage] = useState(imagesArray[0])
    console.log('Index of current image', imagesArray.indexOf(activeImage))
    const previousImage = (img: string): void => {
        let currentImgIndex = imagesArray.indexOf(img)
        let prevImgIndex = currentImgIndex - 1; 
        //ex This line cannot be done with ++ or substraction - - ! It reassigns the previous instance of the variable
        //ex used and modifies the previous value. Also, ++ and substraction can be used both in front and in the 
        //ex back of the value to be modified. 
        currentImgIndex !== 0 && setActiveImage(imagesArray[prevImgIndex])
    }

    const nextImage = (img: string): void => {
        let currentImgIndex = imagesArray.indexOf(img)
        let nextImgIndex = currentImgIndex + 1;
        currentImgIndex !== imagesArray.length - 1 && setActiveImage(imagesArray[nextImgIndex])
        
    }

    const setImage = (img: number): void => {
        
    }

  return (
   <StyledCarrousel>
     <img src={activeImage} alt='A pokemon illustration'/>
     {imagesArray.map((img) => (
                <button key={img}  onClick={() => setActiveImage(imagesArray[imagesArray.indexOf(img)])}>
                    <img src={img} className='miniIcons'/>
                </button>
            ))}
    {/* <button onClick={() => previousImage(activeImage)}  disabled={imagesArray.indexOf(activeImage) === 0}>
        -1
    </button>
    <button onClick={() => nextImage(activeImage)} disabled={imagesArray.indexOf(activeImage) === imagesArray.length - 1}>
        +1
    </button> */}
   </StyledCarrousel>
  )
}
