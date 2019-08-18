import React from 'react';
import PropTypes from 'prop-types';
import { Link as LinkRouter } from 'react-router-dom'

import LinkStyle from './LinkStyle.js'

Link.propTypes = {
  children: PropTypes.node,
  src: PropTypes.string,
  to: PropTypes.string,
  big: PropTypes.bool, 
  large: PropTypes.bool, 
  small: PropTypes.bool, 
  primary: PropTypes.bool, 
  bold: PropTypes.bool, 
  inverted: PropTypes.bool,
  nowrap: PropTypes.bool,
  navBar: PropTypes.bool,
  withoutLine: PropTypes.bool,
  input: PropTypes.bool
}

Link.defaultProps = {
    children: null
}

function Link({
    children, small, big, large, primary,  bold, inverted, uppercase, nowrap, navBar, to, src, withoutLine,
    input
}) {

  return (
      <LinkRouter to={to} src={src}>
        <LinkStyle small={small} 
               big={big}
               large={large}
               primary={primary}
               bold={bold}
               inverted={inverted}
               uppercase={uppercase}
               nowrap={nowrap}
               navBar={navBar}
               withoutLine={withoutLine}
               input={input}
               >
         { children }    
        </LinkStyle>
      </LinkRouter>
  );
}

export default Link;
