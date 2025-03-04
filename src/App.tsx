import ItemDisplay from './components/itemDisplay'
import Navbar from './components/navbar'
import './App.css'
import { CartProvider } from './components/cartContext'
import { ModalProvider } from './components/modalContext';

import Footer from './components/footer'
function App() {

  return (
    <>
      <CartProvider>
      <ModalProvider>
      <Navbar/>
      <ItemDisplay/>
      <Footer/>
      </ModalProvider>
      </CartProvider>
     

    </>
  )
}

export default App
