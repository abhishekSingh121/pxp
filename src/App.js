import React from 'react';
import {Container,Row,Col} from 'reactstrap'
import SideBar from './components/Sidebar'
import Content from './components/Content'
import VideoComponent from './components/VideoComponent'

import './App.css';

function App() {
  return (
    <Container fluid>
      <Row>
        <Col  md='3'>
          <SideBar/>
        </Col>
        <Col  md='9'>
          <Content/>
          <VideoComponent/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
