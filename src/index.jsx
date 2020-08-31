import React from 'react';

const propTypes = {
  children: PropTypes.any,
};

const isProdEnv = () => typeof process !== 'undefined' && process.env && process.env.NODE_ENV === 'production';

/**
 * Hide the child component on prod
 * but show on dev env
 */
const DevOnly = ({ children }) => {
  if (isProdEnv()) {
    return <div style={{ display: 'none' }}>{children}</div>;
  } else {
    return <div title="WARNING: this element is hidden in production build">{children}</div>;
  }
};


DevOnly.propTypes = propTypes;

export default DevOnly;
