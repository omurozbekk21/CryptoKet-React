import React from "react";
import "./footer.css";
import { Container, Row, Col,InputGroup,Form,Button } from "react-bootstrap";
import CryptoIcon from '../../../src/assets/crypto-ket.svg';
import Discord from '../../../src/assets/discord.svg';
import Instagram from '../../../src/assets/instagram.svg';
import Telegram from '../../../src/assets/telegram.svg';
import Twitter from '../../../src/assets/twitter.svg';
const Footer = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col sm={5}>
         <Row>
         <Col sm={12} className="mb-4 footer-left">
         <img src={CryptoIcon} alt="React Logo" />
         </Col>
         <Col sm={12} className="mb-4 footer-left">
         <span className="footer-label">Get The Latest Updates</span>
         </Col>
         <Col sm={12}>
         <div className="input-wrapper">
         <InputGroup className="mb-3">
        <Form.Control
          placeholder="Your Email"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Text id="basic-addon2"><Button className="footer-button">Email Me</Button></InputGroup.Text>
      </InputGroup>
         </div>
         </Col>
         </Row>   
         </Col>
        <Col sm={4}>
           <Row className='footer-middle'>
           <Col sm={12} className="mb-4">
           <span className="footer-label">
            CryptoKet</span>
            </Col>
            <Col sm={12} className="mb-4">
           <span>
            Explore</span>
            </Col>
            <Col sm={12} className="mb-4">
           <span>
            How It Works</span>
            </Col>
            <Col sm={12} className="mb-4">
           <span>
            Contact Us</span>
            </Col>
            </Row> </Col>
        <Col sm={3}>
           <Row className="footer-right">
           <Col sm={12} className="mb-4">
           <span className="footer-label">
            Support</span>
            </Col>
            <Col sm={12} className="mb-4">
           <span>
            Help Center</span>
            </Col>
            <Col sm={12} className="mb-4">
           <span>
            Terms Of Service</span>
            </Col>
            <Col sm={12} className="mb-4">
           <span>
            Legal</span>
            </Col>
            <Col sm={12} className="mb-4">
           <span>
            Privacy Policy</span>
            </Col>
            </Row> </Col>
      </Row>
      <Row className="pb-5 pt-5">
        <Col sm={8} className="footer-left"><span className="footer-label">CrpytoKet, Inc. All Rights Reserved</span></Col>
        <Col sm={4} className='icons-wrapper'>
          <img className="me-3" src={Discord} alt="React Logo" />
          <img className="me-3" src={Instagram} alt="React Logo" />
          <img className="me-3" src={Telegram} alt="React Logo" />
          <img src={Twitter} alt="React Logo" />
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
