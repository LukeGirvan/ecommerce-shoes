import { useCart } from '../hooks/useCart';
import { CartItem } from '../types/cartTypes';
import '../styles/cart.scss'

function Cart(){

    const {hideCart,cartVisible, clearCart, items, increaseQuantity, decreaseQuantity, totalPrice} = useCart()

    const add = (e:React.MouseEvent<HTMLAnchorElement>) =>{
        const id = Number((e.target as HTMLAnchorElement).parentElement?.id)
        increaseQuantity(id)
    }

    const subtract = (e:React.MouseEvent<HTMLAnchorElement>) =>{
        const id = Number((e.target as HTMLAnchorElement).parentElement?.id)
        decreaseQuantity(id)
    }
    
    const stopE = (e:React.MouseEvent) =>{
        e.stopPropagation()
    }



    
return(<>
    <div className={cartVisible ? 'cart-modal show fade-in': 'cart-modal hide fade-out'} onClick={hideCart}>
    <div className={cartVisible ? 'cart show fade-in':'cart hide fade-out' } onClick={stopE} >
        <div className="cart-content">
        <div className="top-div">
        <h1 className="title">
            CART ({items?.length})
        </h1>
        <a className="remove-all" onClick={clearCart}>
        REMOVE ALL</a>
        </div>
        {items.map((item:CartItem, index) => (
            <div className="cart-item" key={`cart-item${index}`}>
                <div className="image-holder">
                <img src={item.image.thumbnail} alt={`image of ${item.name}`} className="cart-image" />
                <div className="product-details">
                <h3 className="product-title">
                    {item.cartName}
                </h3>
                <p className="price">
                   $ {item.price.toLocaleString()}
                </p>
                </div>
                </div>
                <div className="quantity" id={`${item.id}`}>
                <a  className="minus" onClick={subtract}>-</a> {item.quantity} <a  className="add" onClick={add}>+</a>
            </div>  
            </div>
        ))}
        </div>
        <div className="bottom-div">
            <div className="price-details">
            <p>
                TOTAL
            </p>

            <p className="total-price">
               $ {
                    totalPrice.toLocaleString()
                }
            </p>
            </div>
           
            <button className="button1 full-width">
                CHECKOUT
            </button>
           
        </div>
    </div>
    </div>
    
</>)
}
export default Cart;