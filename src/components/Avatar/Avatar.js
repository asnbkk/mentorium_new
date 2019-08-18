import React from 'react';
import PropTypes from 'prop-types';

import AvatarStyle from './AvatarStyle.js'

Avatar.propTypes = {
	children: PropTypes.node,
    size: PropTypes.number,
    src: PropTypes.string
}

Avatar.defaultProps = {
    children: null
}

function Avatar({
    children, size, src
}) {

  return (
    <AvatarStyle src={src} size={size}>
        { children }
    </AvatarStyle>
  );
}

export default Avatar;
