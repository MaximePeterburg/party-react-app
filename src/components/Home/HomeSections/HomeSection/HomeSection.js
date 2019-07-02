import React from 'react';
import classes from './HomeSection.module.css';

const homeSection = props => (
  <div className={classes.HomeSection}>
    <div className={classes.Label}>{props.label}</div>
    <div className={classes.TextPreview}>{props.textPreview}</div>
  </div>
);

export default homeSection;
