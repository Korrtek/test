import React from "react";


function Sidebar ({closeSidebar, items }) {



return (
    <div className="side__bar">
    <div className="hide__other">
    dsa
    </div>
   
    <div className="bar__block">
    
    <div className="bar__items">
    <div className="bar__header__wrapper">
    <h2 >Корзина</h2>
    <label htmlFor="forBtn" className="bar__btn__label" onClick={closeSidebar}>
        <img src="../src/assets/cart-krestik.svg" alt="close" />
    </label>
    <input id="forBtn" type="button"  className="hide__any" />
    </div>
    {
        items.map((obj) => (
            <div className="bar__cart">
            <img width={70} height={70} src={obj.imageUrl} alt="Photoofsneakers" />
            <div className="bar__cart__wrapper">
                <span className="cart__header">{obj.title}</span>
                <span className="cart__price">{obj.price}</span>
            </div>
            <label htmlFor="forCartBtn" className="cart__btn__label">
            <img src="../src/assets/cart-krestik.svg" alt="krestik" />
        </label>
        <input id="forCartBtn" type="button"  className="hide__any" />
        </div>
        ))
    }
    


    </div>
    <div className="order__wrapper">
        <div className="itog__wrapper">
        <span>Итог:</span>
        <div className="dotted"></div>
        <span>21 498 руб</span>
        </div>
        
        <div className="nalog__wrapper">
        <span>Налог:</span>
        <div className="dotted"></div>
        <span>1074 руб</span>
        </div>
       
        <input type="button" name="btn" className="Order__btn" defaultValue={'Оформить заказ   -->'}/> 
    </div>
    </div>
    
    </div>
)


}

export default Sidebar