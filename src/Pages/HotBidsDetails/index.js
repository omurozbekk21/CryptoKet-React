import React, { useState, useEffect } from "react";
import { Container, Row, Col, Tab, Tabs, Button, Modal } from "react-bootstrap";
import Heart from "../../../src/assets/heart.svg";
import "./hotbirdetail.css";

const HotBidsDetail = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const mock = {
    createdAt: "2022-07-13T04:15:51.498Z",
    name: "Brandon Pfeffer",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/45.jpg",
    image: "http://loremflickr.com/640/480/transport",
    price: "557.00",
    fav: 11218,
    creator: "Prince.Heathcote",
    details:
      "Ut similique alias placeat voluptatum. Ab voluptates dolorum dolor rerum tempore. Est tempora aspernatur veritatis dolores laborum recusandae possimus consequatur. Culpa qui velit laudantium vitae earum eos omnis ducimus aliquam. Blanditiis rerum est et. Voluptate laboriosam placeat et molestiae ut architecto hic voluptatem.",
    id: "1",
  };
  const [key, setKey] = useState("details");
  const [data, setData] = useState();
  const [show, setShow] = useState(false);
  useEffect(() => {
    setData(mock);
  }, []);
  const handleClose = () => setShow(false);
  return (
    <Container className="mt-5">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Check Out</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm="8">
                <Row>
                    <Col sm="12"><strong>Item</strong></Col>
                    <Col sm="12" className="img-wrapper-row">
                        <Row>
                        <Col sm="6"> <img className="modal-img" src={data?.image} alt="React Logo" /></Col>
                        <Col sm="6" className="mt-4">
                            <Row>
                            <Col sm="12"><strong>{data?.name}</strong></Col>
                            <Col sm="12">{data?.creator}</Col>
                            </Row>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm="12"><strong>Total</strong></Col>
                </Row>
            </Col>
            <Col sm="4">                
            <Row>
                    <Col sm="12"><strong>Subtotal</strong></Col>
                    <Col sm="12" className="mt-5 mb-5">4.5 <strong>EHT</strong></Col>
                    <Col sm="12">4.5 <strong>EHT</strong></Col>
                </Row></Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Row className="mt-3">
            <Col sm={6}>
              <Button className="btn create-button" onClick={handleClose}>
                Checkout
              </Button>
            </Col>
            <Col sm={6}>
              <Button
                className="btn connect-button"
                variant="outline"
                onClick={handleClose}
              >
                Cancel
              </Button>
            </Col>
          </Row>
        </Modal.Footer>
      </Modal>
      <Row sm={3} className="mt-5">
        <Col sm={6}>
          <img className="left-img" src={data?.image} alt="React Logo" />
        </Col>
        <Col sm={6} md={{ span: 4, offset: 1 }}>
          <Row>
            <Col sm={12}>
              <span className="right-header">
                {data?.creator}
                <span className="right-header-mini">
                  <img className="mr-1 mb-1" src={Heart} alt="heart" />{" "}
                  {Math.floor(data?.price / 10)}
                </span>
              </span>
            </Col>
            <Col sm={12}>
              <span>
                From <strong>4.5 ETH</strong> . 20 of 25 available
              </span>
            </Col>
            <Col sm={12}>
              <Row className="creator-wrapper">
                <Col sm={12} className="creator-header">
                  <span>Creator</span>
                </Col>
                <Col sm={12}>
                  <Row>
                    <Col sm={2} className="px-0">
                      <img
                        className="creator-img"
                        src={data?.avatar}
                        alt="React Logo"
                      />
                    </Col>
                    <Col sm={6} className="creator-name">
                      <span>{data?.name}</span>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col sm={12}>
              <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
              >
                <Tab eventKey="details" title="Details">
                  {data?.details}
                </Tab>
                <Tab eventKey="offers" title="Offers">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </Tab>
                <Tab eventKey="history" title="History">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                </Tab>
              </Tabs>
            </Col>
            <Col sm={12} className="px-0">
              <Row className="mt-3">
                <Col sm={6}>
                  <Button
                    className="btn create-button"
                    onClick={() => {
                      setShow(!show);
                    }}
                  >
                    Buy For 4.5 ETH
                  </Button>
                </Col>
                <Col sm={6}>
                  <Button
                    className="btn connect-button"
                    variant="outline"
                    onClick={() => {
                      setShow(!show);
                    }}
                  >
                    Make Offer
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default HotBidsDetail;
