import React from 'react';

class RemoveModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: this.props.showModal
    };
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal() {
    this.setState({
      showModal: false
    }, () => this.props.handleCancel());
  }

  render() {
    let showModal = this.state.showModal ? 'remove-modal-content' : 'hidden';
    let showModalBack = this.state.showModal ? 'remove-modal-back' : 'hidden';
    let productID = parseFloat(this.props.item.ID);
    let productName = this.props.item.Name;
    let price = this.props.item.Price;
    let priceRounded = price / Math.pow(10, 2);
    let count = parseInt(this.props.item.count);
    return (
      <div className={showModalBack}>
        <div className={showModal}>
          <div className="modal-header start-modal">
            <span className="modal-title initial-modal-title">Are you sure you want to remove this item from your cart?</span>
          </div>
          <div className="remove-item-container">
            <h5 className="item-title">{productName}</h5>
            <span className="price">{'$' + priceRounded + '.00'}</span>
            <span className="item-count">Quantity: {count}</span>
          </div>
          <div>
            <button type="button" className="btn remove-modal-button" onClick={() => { this.props.deleteItem(productID); this.closeModal(); }}>Remove</button>
            <button type="button" className="btn remove-modal-button" onClick={this.closeModal}>Cancel</button>
          </div>
        </div>
      </div>
    );
  }
}

export default RemoveModal;
