import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { PhoneField } from './PhoneField';

interface IProps {
  onSubmit: () => void;
}

function BasicExample({ onSubmit }: IProps) {
  const onSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit();
  };
  return (
    <Form onSubmit={(event) => onSubmitForm(event)}>
      <Form.Group className='mb-3' controlId='formBasicPassword'>
        <Form.Label>Phone</Form.Label>
        <PhoneField />
      </Form.Group>

      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Label>Your name</Form.Label>
        <Form.Control type='text' placeholder='Enter your name' />
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
