import React from 'react';

import HomeHead from '../../components/Home/HomeHead/HomeHead';
import HomeSections from '../../components/Home/HomeSections/HomeSections';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import classes from './Home.module.css';

const home = props => {
  let header;
  header = (
    <Aux className={classes.Home}>
      <HomeHead />
      <HomeSections />
    </Aux>
  );
  return { header };
};

export default home;
