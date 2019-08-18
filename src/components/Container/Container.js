import React from 'react';
import PropTypes from 'prop-types';

import ContainerStyle from './ContainerStyle.js'

Container.propTypes = {
  children: PropTypes.node,
  width: PropTypes.string,
  height: PropTypes.string,
  margin: PropTypes.array,
  padding: PropTypes.array,
  align: PropTypes.string,
  justifyContent: PropTypes.string,
  direction: PropTypes.string,
  position: PropTypes.string,
  top: PropTypes.number,
  bottom: PropTypes.number,
  left: PropTypes.number,
  zIndex: PropTypes.number,
  borderRadius: PropTypes.string
}

Container.defaultProps = {
    children: null,
    margin: [0, 0, 0, 0],
    padding: [0, 0, 0, 0],
}

function Container({
    children, margin, padding, direction, justifyContent, align, width, height, position, top, bottom, left, zIndex, borderRadius
}) {

  return (
      <ContainerStyle direction={direction}
                      align={align} 
                      width={width}
                      height={height}
                      justifyContent={justifyContent}
                      padding={padding}
                      margin={margin}
                      position={position}
                      top={top}
                      bottom={bottom}
                      left={left}
                      zIndex={zIndex}
                      borderRadius={borderRadius}>
        { children }
    </ContainerStyle>
  );
}

export default Container;
