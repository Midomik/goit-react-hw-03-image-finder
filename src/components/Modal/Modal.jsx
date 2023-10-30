import { Component } from 'react';
import css from './Modal.module.css';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyEscape);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyEscape);
  }
  handleKeyEscape = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };
  overlayClick = e => {
    if (e.currentTarget === e.target) {
      this.props.closeModal();
    }
  };
  render() {
    return (
      <div onClick={this.overlayClick} className={css.overlay}>
        <div className={css.modal}>
          <img
            src={this.props.modalData.largeImageURL}
            alt={this.props.modalData.description}
          />
        </div>
      </div>
    );
  }
}
