import React from 'react';
import 'react-phone-number-input/style.css';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';

function PhoneField() {
  // `value` will be the parsed phone number in E.164 format.
  // Example: "+12133734253".
  const [phoneValue, setPhoneValue] = React.useState();
  return (
    <PhoneInput
      defaultCountry='US'
      placeholder='Enter phone number'
      value={phoneValue}
      onChange={() => setPhoneValue(phoneValue)}
    />
  );
}

export { PhoneField };
