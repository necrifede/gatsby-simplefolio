import React from 'react';
import PropTypes from 'prop-types';
import { StaticImage } from 'gatsby-plugin-image';

// Testing StaticImage component
// eslint-disable-next-line no-unused-vars
const AboutImg = ({ filename, alt }) => (
  <StaticImage src="../../images/profile.jpg" alt={alt} className="rounded" width="350" />
);

AboutImg.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
};

export default AboutImg;
