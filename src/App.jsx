import React from "react"

import Sneakers from "./components/Sneakers"
import Sidebar from "./components/Sidebar"
import Header from "./components/Header"
import Sneakers3 from './assets/sneaker-3.jpeg'
import {CardItems} from './data/sneareks.js'

function App() {

  const [sidebarOpen, setSidebarOpen] = React.useState(false)
  const [cartItems, setCartItems] = React.useState([])



  const onAddToCart = (item) => {
    setCartItems([...cartItems, item])
  }
  return (




    <div className="wrapper">
      {sidebarOpen && <Sidebar  items = {cartItems}   closeSidebar ={() => setSidebarOpen(false)} />}
      <Header openSidebar ={ () => setSidebarOpen(true)} />
      <div className="border"></div>
      <div className="search__wrapper">
      <h1>ВСЕ КРОССОВКИ</h1>
      <input type="text" placeholder="       Найти..." className="search__btn"/>
      </div>
      <div className="cards__wrapper">
      {CardItems.map ((item) => 
      (<Sneakers
        title = {item.title}
        imageUrl={item.imageUrl}
        price= {item.price}
        checked = { (item) => onAddToCart(item)}
        />
      ))}
      
    </div>
    </div>
  )
}

export default App
