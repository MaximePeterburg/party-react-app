import React from 'react';

import HomeSection from './HomeSection/HomeSection';
import classes from './HomeSections.module.css';

let sections = [
  {
    label: 'Programme',
    textPreview:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula enim, congue eget sapien eget, sodales.'
  },
  {
    label: 'Platform',
    textPreview:
      'Ut vitae dignissim mauris. Nullam condimentum aliquet arcu ut aliquam.'
  },
  {
    label: 'History',
    textPreview:
      'In porta nunc enim, eget accumsan nisl convallis dictum. Aenean vitae magna vestibulum, sagittis eros vel, viverra mauris. Morbi congue eros eu augue auctor, ac fringilla turpis varius. Etiam congue finibus turpis. Proin imperdiet, sapien vel mollis aliquam, quam risus feugiat dui, a.'
  }
];
const homeSections = props => (
  <div className={classes.homeSections}>
    {sections.map(sctn => (
      <HomeSection
        key={sctn.label}
        label={sctn.label}
        textPreview={sctn.textPreview}
      />
    ))}
  </div>
);

export default homeSections;
