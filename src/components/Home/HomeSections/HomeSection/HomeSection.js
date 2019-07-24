import React from 'react';
import Col from 'react-bootstrap/Col';

import Programme from '../../../../assets/pdfs/Programme.pdf';
import Platform from '../../../../assets/pdfs/Platform.pdf';

const homeSection = props => {
  return (
    <Col xs="4">
      <h2>{props.label}</h2>
      <p>{props.textPreview}</p>
    </Col>
  );
};

export default homeSection;
