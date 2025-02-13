import ItemDisplay from './components/itemDisplay'
import Navbar from './components/navbar'
import './App.css'
import { CartProvider } from './components/cartContext'
import Footer from './components/footer'
function App() {

  return (
    <>
      <CartProvider>
      <Navbar/>
      <ItemDisplay/>
      <Footer/>
      </CartProvider>
     

    </>
  )
}

export default App
