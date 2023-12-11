import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

interface IProps {
  show: boolean;
  setShow: (value: boolean) => void;
}

function CallToActionToast({ show, setShow }: IProps) {
  return (
    <Toast
      className='toast'
      onClose={() => setShow(false)}
      show={show}
      delay={3000}
      autohide
      bg='success'
    >
      <Toast.Header>
        <img src='holder.js/20x20?text=%20' className='rounded me-2' alt='' />
        <strong className='me-auto'>Order Sent!</strong>
        <small>Success!</small>
      </Toast.Header>
      <Toast.Body>We'll contact you ASAP!</Toast.Body>
    </Toast>
  );
}

export default CallToActionToast;
