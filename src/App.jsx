import React from "react"

import Sneakers from "./components/Sneakers"
import Sidebar from "./components/Sidebar"
import Header from "./components/Header"


const CardItems = [
  { title:"Мужские кроссовки Nike Blazer Mid Suede",
  imageUrl:"../src/assets/sneaker-1.jpeg",
  price:12999,
  },{
  title:"Мужские Кроссовки Under Armour Curry 8",
  imageUrl:"../src/assets/sneaker-2.jpeg",
  price: 15199,
  },
  {
    title:"Мужские Кроссовки Nike Kyrie 7",
    imageUrl:"../src/assets/sneaker-3.jpeg",
    price: 11299,
    },
    {
      title:"Мужские Кроссовки Jordan Air Jordan 11",
      imageUrl:"../src/assets/sneaker-4.jpeg",
      price: 10799,
      },
      {
        title:"Мужские Кроссовки Nike Lebron XVIII Low",
        imageUrl:"../src/assets/sneaker-5.jpeg",
        price: 13999,
        },

]

console.log(CardItems)


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
