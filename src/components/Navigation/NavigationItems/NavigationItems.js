import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Logo from '../../../components/Logo/Logo';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';

const navigationItems = props => (
  <Aux>
    <Container>
      <Row className={classes.Toolbar}>
        <Col xs="1">
          <NavigationItem link="/" exact>
            <Logo />
          </NavigationItem>
        </Col>
        <Col xs="3" />
        <Col xs="1">
          <NavigationItem link="/posts">Posts</NavigationItem>
        </Col>
        <Col xs="1">
          <NavigationItem link="/" exact>
            Party
          </NavigationItem>
        </Col>
        <Col xs="2">
          <NavigationItem link="/Libertarianism">Libertarianism</NavigationItem>
        </Col>
        <Col xs="2" />
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
