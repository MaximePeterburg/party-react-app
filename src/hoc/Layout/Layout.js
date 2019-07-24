import React from 'react';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Aux from '../Auxiliary/Auxiliary';

const layout = props => (
  <Aux>
    <Toolbar />
    <main>{props.children}</main>
  </Aux>
);
export default layout;
