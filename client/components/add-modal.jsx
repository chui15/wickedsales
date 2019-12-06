import React from 'react';

class AddModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: this.props.showModal,
      cartClicked: false
    };
    this.close = this.close.bind(this);
    this.switchCart = this.switchCart.bind(this);
  }

  close() {
    this.setState({
      showModal: false
    });
  }

  switchCart() {
    this.props.setView('cart', {});
    this.close();
  }

  render() {
    let showModal = this.state.showModal ? 'add-modal-content' : 'hidden';
    return (
      <div className={showModal}>
        <div className="modal-header start-modal">
          <span className="modal-title initial-modal-title">Item successfully added to cart!</span>
        </div>
        <div>
          <button type="button" className="btn add-modal-button" onClick={this.switchCart}>View Cart</button>
          <button type="button" className="btn add-modal-button" onClick={this.close}>Continue Shopping</button>
        </div>
      </div>
    );
  }

}

export default AddModal;
