import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';

const navigationItems = props => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/posts">Posts</NavigationItem>
    <NavigationItem link="/" exact>
      Party
    </NavigationItem>
    <NavigationItem link="/Libertarianism">Libertarianism</NavigationItem>
    <NavigationItem link="/apply">Apply</NavigationItem>
    <NavigationItem link="/donate">Donate</NavigationItem>
  </ul>
);

export default navigationItems;
