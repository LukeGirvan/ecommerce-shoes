import prevIcon from '/assets/icon-previous.svg'
import nextIcon from '/assets/icon-next.svg'
import { useState, } from 'react'
import '../styles/galleryModal.scss'
import { useModal } from './modalContext'

interface imageSrc{
    thumbnailSrc:string;
    bigSrc:string;
}
interface GalleryProps {
    images:imageSrc[]
}

const Gallery:React.FC<GalleryProps> = ({images}) =>{

    const [selectedIndex, setSelectedIndex] = useState(0)
    
    const {  openModal } = useModal(); 


    const decreaseIndex = () =>{
        if(selectedIndex>=1){
            setSelectedIndex(selectedIndex-1)
        }
    }
    const increaseIndex = () =>{
        if(selectedIndex<=2){
            setSelectedIndex(selectedIndex+1)
        }
    }

    

    


    return (
        <>
        <div className="big-image-holder">
            <span className={`previous ${selectedIndex === 0 ? "hidden" : ""}`} onClick={decreaseIndex}>
                <img src={prevIcon} alt="Previous" className="prev-arrow" />
            </span>

            <img
                src={images[selectedIndex].bigSrc}
                alt=""
                className="big-image cursor-pointer"
                onClick={openModal}
            />

            <span className={`next ${selectedIndex === images.length - 1 ? "hidden" : ""}`} onClick={increaseIndex}>
                <img src={nextIcon} alt="Next" className="next-arrow" />
            </span>

            {/* Small Thumbnails */}
            <div className="small-images-holder">
                {images.map((image, index) => (
                    <div key={index} className={`small-image-holder ${selectedIndex === index ? "selected" : ""}`}>
                        <img
                            src={image.thumbnailSrc}
                            className="small-image"
                            onClick={() => setSelectedIndex(index)}
                            alt={`Thumbnail ${index + 1}`}
                        />
                    </div>
                ))}
            </div>

           
        </div>
        
        
        </>
        
        
    );
}   






export default Gallery;
