import React from "react";


function Sneakers ({title, imageUrl, price, checked}) {


const onClickChecked = () => {
    checked({title, imageUrl, price})
}

return (

<div className="cards">
    <img  width={133} height={112} src={imageUrl} alt="sneaker" />
    <span className="card__name">{title}</span>
    <div className="price__btn">
    <div className="price">
    <span className="card__price">ЦЕНА:</span>
    <span className="card__number">{price} руб.</span>
    </div>
    <label htmlFor="forBtn" className="btn__label" onClick={onClickChecked}>
        <img src="../src/assets/krestik.svg" alt="krestik" />
    </label>
    <input id="forBtn" type="button"  className="hide__any" />
</div>
</div>
)


}

export default Sneakers