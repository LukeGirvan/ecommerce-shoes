import { useState, useMemo } from "react";
import Gallery from "./gallery";
import '../styles/galleryModal.scss'

import { useModal } from "./modalContext";

const GalleryModal:React.FC = () =>{

    const {closeModal, isOpen} = useModal()

    const images = useMemo(() =>{
        return[{thumbnailSrc:'/ecommerce-shoes/assets/image-product-1-thumbnail.jpg',bigSrc:'/ecommerce-shoes/assets/image-product-1.jpg'},
            {thumbnailSrc:'/ecommerce-shoes/assets/image-product-2-thumbnail.jpg',bigSrc:'/ecommerce-shoes/assets/image-product-2.jpg'},
            {thumbnailSrc:'/ecommerce-shoes/assets/image-product-3-thumbnail.jpg',bigSrc:'/ecommerce-shoes/assets/image-product-3.jpg'},
            {thumbnailSrc:'/ecommerce-shoes/assets/image-product-4-thumbnail.jpg',bigSrc:'/ecommerce-shoes/assets/image-product-4.jpg'}]
    }
      ,[])

    const test = (e:React.MouseEvent) =>{
        e.stopPropagation()
    }

return(

<>

        <div className={`gallery-modal ${isOpen ? 'fade-in' : 'hidden fade-out'}`} onClick={closeModal}>
                           
           <div className="gallery-content" onClick={test}>
                <div className="close-button-holder">
                    <button
                        className="close-button"
                        onClick={closeModal}
                    >
                        ✖
                    </button>
                    
                    
                </div>
                <Gallery images={images} />
           </div>

       </div>
               </>
)  
}
export default GalleryModal;