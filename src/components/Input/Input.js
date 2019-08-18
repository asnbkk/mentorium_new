import React from 'react';
import PropTypes from 'prop-types';

import InputStyle from './InputStyle.js'

Input.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    small: PropTypes.bool,
    blue: PropTypes.bool
}

Input.defaultProps = {
  onChange: () => {}
}

export default function Input({
    type, placeholder, small, onChange, blue
}) {

  return (
    <InputStyle blue={blue} small={small} onChange={onChange} type={type} placeholder={placeholder}>
    </InputStyle>
  );
}