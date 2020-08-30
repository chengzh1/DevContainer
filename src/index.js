import React from 'react';
import PropTypes from 'prop-types';

import { isProdEnv } from './util';

const propTypes = {
  children: PropTypes.any,
};

/**
 * Hide the child component on prod
 * but show on dev env
 */
const DevContainer = ({ children }) => {
  if (isProdEnv()) {
    return <div style={{ display: 'none' }}>{children}</div>;
  } else {
    return <div title="WARNING: this element is hidden in production build">{children}</div>;
  }
};

DevContainer.propTypes = propTypes;

export default DevContainer;
