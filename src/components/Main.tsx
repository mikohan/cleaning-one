import React from 'react';
import vidBg from '../assets/bmw_v3.mp4';
import vidBg1 from '../assets/cleaning_creative_002_15_sec.mp4';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import CallToActionForm from './CallToActionForm';
import CallToActionToast from './CallToActionToast';

const Main = () => {
  const [show, setShow] = React.useState<boolean>(false);
  const [toastShow, setToastShow] = React.useState<boolean>(false);

  const onSubmit = () => {
    setToastShow(true);
    setShow(false);
  };
  return (
    <>
      <CallToActionToast show={toastShow} setShow={setToastShow} />
      <div className='main'>
        <div className='overlay'></div>
        <video src={vidBg1} autoPlay loop muted />
        <div className='logo-wrapper'>
          <div className='phone'>Logo here</div>
          <div className='phone'>(951) 224 41 09</div>
        </div>
        <div className='content'>
          <h1>Deep Cleaning Services</h1>
          <p>For only $39/hr</p>
          <Button
            variant='outline-light'
            size='lg'
            onClick={() => setShow(true)}
          >
            Contact us now!
          </Button>

          <h2 className='happy-customers'>More than 500 happy clients!</h2>
        </div>
        {/* // Bottom button */}
        <div className='button-block'>
          <Button variant='success' size='lg' className='button-bottom'>
            Order Cleaning Now!
          </Button>
        </div>
        <MyVerticallyCenteredModal
          show={show}
          setShow={setShow}
          onHide={() => setShow(false)}
          onSubmit={onSubmit}
        />
      </div>
    </>
  );
};
export { Main };

interface IProps {
  onHide: () => void;
  show: boolean;
  onSubmit: () => void;
  setShow: (v: boolean) => void;
}
function MyVerticallyCenteredModal({ onSubmit, setShow, show }: IProps) {
  const handleClose = () => setShow(false);
  return (
    <Modal
      show={show}
      onHide={handleClose}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          We'll reach out you ASAP!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CallToActionForm onSubmit={onSubmit} />
      </Modal.Body>
    </Modal>
  );
}
