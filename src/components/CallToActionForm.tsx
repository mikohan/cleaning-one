import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { PhoneField } from './PhoneField';
import axios from 'axios';

interface IProps {
  onSubmit: () => void;
}

function BasicExample({ onSubmit }: IProps) {
  const [phoneValue, setPhoneValue] = React.useState<string>('');
  const [clientName, setClientName] = React.useState<string>('');

  const onSubmitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const credentials = {
      service_id: 'service_28l37sa',
      template_id: 'template_z37kom6',
      user_id: '42Bbj0zJrwuCZtcHN',
      template_params: {
        name: clientName,
        email: phoneValue,
        to_name: 'Cleaners Manager',
      },
    };

    const apiUrl = 'https://api.emailjs.com/api/v1.0/email/send';
    const res = await axios.post(apiUrl, credentials);

    if (phoneValue) {
      if (res.status == 200) onSubmit();
    }
  };

  return (
    <Form onSubmit={(event) => onSubmitForm(event)}>
      <Form.Group className='mb-3' controlId='formBasicPassword'>
        <Form.Label>Phone</Form.Label>
        <PhoneField phoneValue={phoneValue!} setPhoneValue={setPhoneValue} />
      </Form.Group>

      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Label>Your name</Form.Label>
        <Form.Control
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
          type='text'
          placeholder='Enter your name'
        />
        <Form.Text className='text-muted'>If you want to.</Form.Text>
      </Form.Group>

      <Form.Group className='mb-3' controlId='formBasicCheckbox'>
        <Form.Check
          type='checkbox'
          label='I agree with confidential policy'
          checked
          readOnly
        />
      </Form.Group>
      <Button variant='primary' type='submit'>
        Submit
      </Button>
    </Form>
  );
}

export default BasicExample;
