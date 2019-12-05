import React from 'react';

class InitialModal extends React.Component {
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
    });
  }

  render() {
    let showModal = this.state.showModal ? 'initial-modal-content' : 'hidden';
    let showModalBack = this.state.showModal ? 'initial-modal-back' : 'hidden';
    return (
      <div className={showModalBack}>
        <div className={showModal}>
          <div className="modal-header start-modal">
            <span className="modal-title initial-modal-title">Please read the following disclaimer before continuing:</span>
          </div>
          <p className="modal-disclaimer">This application is a LIVE DEMO ONLY.  There are no actual products for sale, nor are any transactions being processed.  In addition, please do not provide any real personal information.
          All product images and descriptions are from a third party source.  Please confirm acknowledgement of this disclaimer below.  Thank you for your cooperation!</p>
          <span>
            <button type="button" className="btn modal-button" onClick={this.closeModal}>I Understand</button>
          </span>
        </div>
      </div>
    );
  }
}

export default InitialModal;
