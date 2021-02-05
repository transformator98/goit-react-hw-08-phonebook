import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { useState, useEffect } from 'react';

export default function InputPhone({ handleInputChange, submitted }) {
  //   console.log('InputPhone', handleInputChange);

  useEffect(() => {
    if (submitted) {
      setValue('');
    }
  }, [submitted]);

  const [value, setValue] = useState();
  return (
    <PhoneInput
      countryCallingCodeEditable={false}
      defaultCountry="UA"
      //   value={number}
      //   placeholder="Number contact"
      //       onChange={handleInputChange}

      value={value}
      onChange={value => {
        setValue(value);
        handleInputChange(value);
      }}
    />
  );
}
