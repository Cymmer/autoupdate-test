import React from 'react';
import { Detector } from 'react-detect-offline';
import PropTypes from 'prop-types';

const ConnectionDetector = ({ onChange }) => (
  <Detector
    polling={{
      enabled: true,
      url: 'https://ipv4.icanhazip.com',
      interval: 2500,
      timeout: 2500,
    }}
    render={() => null}
    onChange={onChange}
  />
);

ConnectionDetector.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default ConnectionDetector;
