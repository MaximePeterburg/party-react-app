import React from 'react';
import { connect } from 'react-redux';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Aux from '../Auxiliary/Auxiliary';
import classes from './Layout.module.css';

const layout = props => (
  <Aux>
    <Toolbar />
    {/* <main className={classes.Content}>{props.children}</main> */}
  </Aux>
);
// export default connect()(layout);
export default layout;
