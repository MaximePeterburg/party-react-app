import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import HomeHead from '../../components/Home/HomeHead/HomeHead';
import HomeSections from '../../components/Home/HomeSections/HomeSections';
import classes from './Home.module.css';

const home = props => {
  let header;
  header = (
    <Container className={classes.header}>
      <Row className="justify-content-md-center">
        <HomeHead />
      </Row>
      <HomeSections />
    </Container>
  );
  return header;
};

export default home;
