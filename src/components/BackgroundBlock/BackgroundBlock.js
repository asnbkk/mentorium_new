import React from 'react';
import PropTypes from 'prop-types';

import BackgroundBlockStyle from './BackgroundBlockStyle.js'

BackgroundBlock.propTypes = {
    children: PropTypes.node,
    top: PropTypes.number,
    left: PropTypes.number,
    lightBlue: PropTypes.string,
    yellow: PropTypes.string,
    rotate: PropTypes.number,
    width: PropTypes.string
}

BackgroundBlock.defaultProps = {
    children: null,
    top: 50,
    left: 50,
    rotate: 60,
    width: '1300px',
}

export default  function BackgroundBlock({
    lightBlue, top, left, rotate, width, yellow
}) {

  return (
    <BackgroundBlockStyle yellow={yellow} width={width} rotate={rotate} left={left} top={top} lightBlue={lightBlue}>
    </BackgroundBlockStyle>
  );
}