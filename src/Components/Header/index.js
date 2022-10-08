import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Explore from '../../Pages/Explore';
import Following from '../../Pages/Following';
import MyItems from '../../Pages/MyItems';
import HotBidsDetail from '../../Pages/HotBidsDetails';
import SearchIcon from '../../../src/assets/search.svg';
import CryptoIcon from '../../../src/assets/crypto-ket.svg';
import {
  Nav,
  Navbar,
  InputGroup,
  Form,
  Button,
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import './header.css';

const BasicExample = () => {
  // const [value,setValue]=useState('')
  return (
    <Router>
      <Navbar bg="dark" variant="dark">
        <Container fluid className="navbar-container">
          <Row className="navbar-row-container">
            <Col xs={12} sm={1}><img src={CryptoIcon} alt="React Logo" /></Col>
            <Col xs={12} sm={6}>
              <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-default">
                  <img src={SearchIcon} alt="search" />
                </InputGroup.Text>
                <Form.Control
                  placeholder="Search Item Here"
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                />
              </InputGroup>
            </Col>
            <Col xs={12} sm={2}>
              <Nav defaultActiveKey="/" className="me-auto">
                <Nav.Link as={Link} to={'/'}>Explore</Nav.Link>
                <Nav.Link as={Link} to={'/MyItems'}>MyItems</Nav.Link>
                <Nav.Link as={Link} to={'/Following'}>Following</Nav.Link>
              </Nav>
            </Col>
            <Col xs={12} sm={3}>
              <Row className="navbar-row-container">
                <Col xs={12} sm={6}>
                  <Button className="btn create-button">Create</Button>
                </Col>
                <Col xs={12} sm={6}>
                 <Button
                    className="btn connect-button"
                    variant="outline"
                  >
                    Connect
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Navbar>
      <div>
        <Routes>
          <Route path="/" element={<Explore />} />
          <Route path="MyItems" element={<MyItems />} />
          <Route path="Following" element={<Following />} />
          <Route path="HotBidsDetail/:id" element={<HotBidsDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default BasicExample;
