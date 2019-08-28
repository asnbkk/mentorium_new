import React from 'react';
import PropTypes from 'prop-types';

import ImageStyle from './ImageStyle.js'

Image.propTypes = {
	children: PropTypes.node,
    size: PropTypes.string,
    src: PropTypes.string,
    borderRadius: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    withFilter: PropTypes.bool,
    withBrightFilter: PropTypes.bool,
    welcome: PropTypes.bool,
    navbar: PropTypes.bool,
    professionHeader: PropTypes.bool,
}

Image.defaultProps = {
    children: null
}

function Image({
    children, size, src, borderRadius, width, height, withFilter, withBrightFilter, welcome, navbar,
    professionHeader,
}) {

  return (
    <ImageStyle withFilter={withFilter} withBrightFilter={withBrightFilter}
     height={height} width={width} src={src} size={size} borderRadius={borderRadius}
     welcome={welcome} navbar={navbar} professionHeader={professionHeader}>
        { children }
    </ImageStyle>
  );
}

export default Image;
