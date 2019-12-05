import React from 'react';

function OrderSummaryItem(props) {
  let price = props.item.Price;
  let priceRounded = price / Math.pow(10, 2);
  let count = Number.parseFloat(props.item.count);
  return (
    <>
    <div className="row">
      <div className="col-xs-4 ml-4 align-self-center">
        <h5 className="order-item-title">{props.item.Name}</h5>
        <span className="price">{'$' + priceRounded + '.00'}</span>
        <span className="item-count">Quantity: {count}</span>
      </div>
    </div>
    </>
  );
}

export default OrderSummaryItem;
