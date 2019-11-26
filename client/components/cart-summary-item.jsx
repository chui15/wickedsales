import React from 'react';

function CartSummaryItem(props) {
  let price = Number.parseFloat(props.item.Price);
  let priceRounded = price / Math.pow(10, 2);
  let count = Number.parseFloat(props.item.count);
  let productID = Number.parseFloat(props.item.ID);
  return (
    <>
    <div className="cart-square row">
      <div className="col-12 col-md-4">
        <span className="ml-5">
          <img src={props.item.Image} className="item-image"></img>
        </span>
      </div>
      <div className="col-6 col-md-6 align-self-center">
        <h4>{props.item.Name}</h4>
        <span className="price">{'$' + priceRounded + '.00'}</span>
        <span className="item-count">Quantity: {count}</span>
        <span>{props.item['Short Description']}</span>
        <span className="delete-cart" onClick={() => { props.deleteItem(productID); }}>&times; Remove from cart</span>
      </div>
    </div>
    </>
  );
}

export default CartSummaryItem;
