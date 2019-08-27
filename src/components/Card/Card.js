import React from 'react';
import PropTypes from 'prop-types';

import CardStyle from './CardStyle.js'

Card.propTypes = {
    children: PropTypes.node,
    steps: PropTypes,
    list: PropTypes,
}

Card.defaultProps = {
    children: null,
}

export default function Card({
    children, steps, list
}) {

  return (
    <CardStyle steps={steps} list={list}>
        { children }
    </CardStyle>
  );
}