import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';
import { getThemeColors } from '../../_helpers/theme';
import colors from '../../tokens/colors';

function Card({ width, height, fill }) {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 6a3 3 0 013-3h18a3 3 0 013 3v12a3 3 0 01-3 3H3a3 3 0 01-3-3V6zm2 0a1 1 0 011-1h18a1 1 0 011 1v3H2V6zm20 5v7a1 1 0 01-1 1H3a1 1 0 01-1-1v-7h20z"
        fill={fill}
      />
    </Svg>
  );
}

Card.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.oneOf(getThemeColors()),
};

Card.defaultProps = {
  width: 24,
  height: 24,
  fill: colors.sapphire[800],
};

export default Card;
