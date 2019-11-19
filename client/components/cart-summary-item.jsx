import React from 'react';

function CartSummaryItem(props) {
  let price = Number.parseFloat(props.item.Price);
  let priceRounded = price / Math.pow(10, 2);
  return (
    <>
    <div className="cart-square row">
      <div className="col-12 col-md-6">
        <span className="ml-4">
          <img src={props.item.Image} className="item-image"></img>
        </span>
      </div>
      <div className="col-6 col-md-6 align-self-center">
        <h3>{props.item.Name}</h3>
        <span className="price">{'$' + priceRounded}</span>
        <span>{props.item['Short Description']}</span>
      </div>
    </div>
    </>
  );
}

export default CartSummaryItem;
