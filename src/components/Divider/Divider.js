import React from 'react';
import PropTypes from 'prop-types';

import DividerStyle from './DividerStyle.js'

Divider.propTypes = {
    vertical: PropTypes.bool
}

Divider.defaultProps = {
    children: null
}

function Divider({
    children, vertical
}) {

  return (
    <DividerStyle vertical={vertical} />
  );
}

export default Divider;
