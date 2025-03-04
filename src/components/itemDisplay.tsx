import addIcon from '/assets/icon-plus.svg'
import minusIcon from '/assets/icon-minus.svg'
import Gallery from './gallery'
import cart from '/assets/icon-cart.svg'
import {useState, useMemo} from 'react'
import '../styles/itemholder.scss'
import '../styles/global.scss'
import { useCart } from '../hooks/useCart'
import {Alert, Snackbar} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import GalleryModal from './galleryModal'


function ItemDisplay(){
    const [quantity, setQuantity] = useState(1)
    const [open,setOpen] = useState(false);
    const {addItem} = useCart()

    const images = useMemo(() =>{
        return[{thumbnailSrc:'/ecommerce-shoes/assets/image-product-1-thumbnail.jpg',bigSrc:'/ecommerce-shoes/assets/image-product-1.jpg'},
            {thumbnailSrc:'/ecommerce-shoes/assets/image-product-2-thumbnail.jpg',bigSrc:'/ecommerce-shoes/assets/image-product-2.jpg'},
            {thumbnailSrc:'/ecommerce-shoes/assets/image-product-3-thumbnail.jpg',bigSrc:'/ecommerce-shoes/assets/image-product-3.jpg'},
            {thumbnailSrc:'/ecommerce-shoes/assets/image-product-4-thumbnail.jpg',bigSrc:'/ecommerce-shoes/assets/image-product-4.jpg'}]
    }
      ,[])

      
    const increaseQuantity = () =>{
        setQuantity(quantity+1)
    }
    const decreaseQuantity = () =>{
        if(quantity>=2){
            setQuantity(quantity-1)
        }
    }

    const [isModalOpen, setIsModalOpen] = useState(false);

    // Function to open the modal
    const openModal = () => setIsModalOpen(true);

    // Function to close the modal
    const closeModal = () => setIsModalOpen(false);
    
        const createItem = () =>{
            const product ={
                id:1,
                quantity:quantity,
                name:'fall sneakers',
                cartName:'Sneakers',
                price:125,
                image:{
                    thumbnail:images[1].thumbnailSrc
                }
            }
            const item = {
                id:product.id,
                quantity: quantity,
                name:product.name,
                cartName:product.cartName,
                price: product.price,
                image:{
                    thumbnail:product.image.thumbnail
                   
                }
            }
            console.log(item)
            addItem(item)
            setOpen(true)



        }
    

    return(
    <div className="mid-section">
        <GalleryModal />
    <div className="item-holder">
    <Gallery images={images} />
        
        <div className="details">
            
                    <h2 className="small-title">
                        SNEAKER COMPANY
                    </h2>
                    <h1 className="big-title">
                        Fall Limited Edition Sneakers
                    </h1>
                    <p className="description">
                    {'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.'}
                    </p>
                    <div className="price-holder">
                        <div className="price-discount-holder">
                        <p className="price">
                            $ 125.00
                        </p>
                        <div className="discount">
                            50%
                        </div>
                        </div>
                        <p className="old-price">
                        <del>$250</del>
                    </p>
                    </div>
                    

            <div className="quantity-add-to-cart-holder">
            <div className="quantity-choice">
            <span className="decrease-item" onClick={decreaseQuantity}>
                    <img src={minusIcon} alt="image of a minus icon" />
                </span>
               
                <span className="quantity">
                    {quantity}
                </span>
                <span className="add-item" onClick={increaseQuantity}>
                    <img src={addIcon} alt="image of a plus icon"  />
                </span>
            </div>
            <button className="add-to-cart" onClick={createItem}>
            <img src={cart} alt="image of cart icon" className='cart-logo'/>
                <span>
                    
                    Add To Cart
                </span>
            </button>
            </div>

        </div>
        </div>
        <Snackbar
      open={open}
      onClose={() => setOpen(false)}
      anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
      autoHideDuration={3000}
    >
      <Alert
        icon={<CheckIcon fontSize="inherit" />}
        severity="success"
        onClose={() => setOpen(false)}
      >
       {'Item Fall Sneakers added to cart successfully'}
      </Alert>
    </Snackbar>
    </div>
    
    )
}
export default ItemDisplay;