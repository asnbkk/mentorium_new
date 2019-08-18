import React from 'react';
import PropTypes from 'prop-types';

import CardStyle from './CardStyle.js'

Card.propTypes = {
    children: PropTypes.node,
    steps: PropTypes,
}

Card.defaultProps = {
    children: null,
}

export default function Card({
    children, steps
}) {

  return (
    <CardStyle steps={steps}>
        { children }
    </CardStyle>
  );
}