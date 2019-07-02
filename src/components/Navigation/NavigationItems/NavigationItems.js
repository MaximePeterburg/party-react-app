import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Aux from '../../../hoc/Auxiliary/Auxiliary';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = props => (
  <Aux>
    <Container>
      <Row>
        <Col xs="4">
          <NavigationItem link="/" exact>
            Logo
          </NavigationItem>
        </Col>
        <Col xs="1">
          <NavigationItem link="/posts">Posts</NavigationItem>
        </Col>
        <Col xs="1">
          <NavigationItem link="/" exact>
            Party
          </NavigationItem>
        </Col>
        <Col xs="4">
          <NavigationItem link="/Libertarianism">Libertarianism</NavigationItem>
        </Col>
        <Col xs="1">
          <NavigationItem link="/apply">Apply</NavigationItem>
        </Col>
        <Col xs="1">
          <NavigationItem link="/donate">Donate</NavigationItem>
        </Col>
      </Row>
    </Container>
  </Aux>
);

export default navigationItems;
