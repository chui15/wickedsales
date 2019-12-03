import React from 'react';

class TransactionModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: true
    };
  }

  render() {
    let modalClass = this.state.showModal ? 'transaction-modal' : 'hidden';

    return (
      <div className={modalClass}>
        <div>
          <h3 className="modal-title">Thank you for shopping with 許願 Shop! </h3>
        </div>
        <div className="row justify-content-center">
          <h5 className="modal-message">Redirecting you back to the home page...</h5>
        </div>
      </div>
    );
  }
}

export default TransactionModal;
