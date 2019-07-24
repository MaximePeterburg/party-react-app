import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import HomeSection from './HomeSection/HomeSection';

let sections = [
  {
    label: 'Programme',
    type: 'Link',
    textPreview:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula enim, congue eget sapien eget, sodales.'
  },
  {
    label: 'Platform',
    type: 'Link',
    textPreview:
      'Ut vitae dignissim mauris. Nullam condimentum aliquet arcu ut aliquam.'
  },
  {
    label: 'History',
    type: 'Text',
    textPreview:
      'In porta nunc enim, eget accumsan nisl convallis dictum. Aenean vitae magna vestibulum, sagittis eros vel, viverra mauris. Morbi congue eros eu augue auctor, ac fringilla turpis varius. Etiam congue finibus turpis. Proin imperdiet, sapien vel mollis aliquam, quam risus feugiat dui, a.'
  }
];
const homeSections = props => (
  <Row className="justify-content-md-center">
    {sections.map(sctn => (
      <HomeSection
        key={sctn.label}
        label={sctn.label}
        type={sctn.type}
        textPreview={sctn.textPreview}
      />
    ))}
  </Row>
);

export default homeSections;
