import React from "react";


function Header (props) {
   console.log(props)
    return (
        
    <header className="header">
        <div className="logo">
        <img width={50} height={50} src="../src/assets/logo-header.svg" alt="logo" />
        <div className="heater__text">
            <h2 className="macro__text">REACT SNEAKERS</h2>
            <p className="mini__text">Магазин лучших кроссовок</p>
        </div>
        </div>
        
        <div className="nav">
        <ul className="header__nav">
            <li className="nav__item" onClick={props.openSidebar}>
            <img  width={18} height={18} src="../src/assets/backet-header.svg" alt="backet" />
            <span>4220 руб</span>
            </li>
            <li className="nav__item">
            <img  width={18} height={18} src="../src/assets/heart-header.svg" alt="heart" />
            <span>Закладки</span>
            </li>
            <li className="nav__item">
            <img  width={18} height={18} src="../src/assets/profile-header.svg" alt="heart" />
            <span>Профиль</span>
            </li>
        </ul>
        </div>
    </header>



    )
}


export default Header