import React from 'react';

import partyLogo from '../../assets/images/PartyLogo.png';
import classes from './Logo.module.css';

const logo = props => {
  return (
    <div className={classes.Logo}>
      <img src={partyLogo} alt="MyParty" />
    </div>
  );
};

export default logo;
