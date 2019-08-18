import React from 'react';
import PropTypes from 'prop-types';

import ButtonStyle from './ButtonStyle.js'

Button.propTypes = {
    children: PropTypes.node,
    primary: PropTypes.bool,
    secondary: PropTypes.bool, 
    big: PropTypes.bool,
    bar: PropTypes.bool,
    landing: PropTypes.bool,
    landingSecond: PropTypes.bool,
    input: PropTypes.bool,
}

Button.defaultProps = {
    children: null,
    onClick: () => {}
}

export default  function Button({
    children, primary, secondary, big, bar, onClick, landing, landingSecond, input
}) {

  return (
    <ButtonStyle onClick={onClick} primary={primary} big={big} bar={bar} secondary={secondary} landing={landing} landingSecond={landingSecond}
    input={input}>
        { children }
    </ButtonStyle>
  );
}