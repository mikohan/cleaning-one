import React from 'react';
import 'react-phone-number-input/style.css';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';

interface IProps {
  phoneValue: string;
  setPhoneValue: (value: string) => void;
}

function PhoneField({ phoneValue, setPhoneValue }: IProps) {
  // `value` will be the parsed phone number in E.164 format.
  // Example: "+12133734253".
  return (
    <PhoneInput
      defaultCountry='US'
      placeholder='Enter phone number'
      value={phoneValue}
      onChange={setPhoneValue}
    />
  );
}

export { PhoneField };
