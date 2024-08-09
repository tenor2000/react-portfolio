import React from 'react';

const SvgIcon = ({ imgAddress, color = 'blue' }) => (
  <svg
    width="50"
    height="50"
    viewBox="0 0 100 100"
    xmlns={imgAddress}
    style={{ fill: color }}
  >
    <circle cx="50" cy="50" r="40" />
  </svg>
);

export default SvgIcon;