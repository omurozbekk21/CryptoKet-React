import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "./explore.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import DiscoverLogo from "../../../src/assets/discover-logo.svg";
import Check from "../../../src/assets/check.svg";
import Heart from "../../../src/assets/heart.svg";
import SwiperCore, { Pagination, Navigation } from "swiper/core";
import { top_seller, hot_bids } from "../../json";

SwiperCore.use([Pagination, Navigation]);

const Explore = () => {
  const navigate = useNavigate();
  const [topSeller, setTopSeller] = useState([]);
  const [hotBids, setHotBids] = useState([]);

  const addMoreItem = (start, limit) => {
    if (hot_bids) {
      let _array = [];
      for (let i = start; i < hot_bids.length; i++) {
        if (i < limit) {
          _array.push(hot_bids[i]);
        }
      }
      setHotBids((previousState) => [...previousState, ..._array]);
    }
  };
  useEffect(() => {
    setTopSeller(top_seller);
    let _array = hot_bids.slice(0, 8);
    setHotBids(_array);
  }, []);

  return (
    <Container fluid="md">
      <Col>
        <Row
          sm={3}
          className="text-center justify-content-center align-items-center"
        >
          <img className="headerImg" src={DiscoverLogo} alt="React Logo" />
        </Row>
        <Row sm={3} className="mt-5">
          <Col sm={12}>
            <span className="label-header">Top Sellers</span>
          </Col>
          <Col sm={12} className="mt-5">
            <Swiper
              slidesPerView={1}
              centeredSlides={true}
              spaceBetween={30}
              navigation={true}
              className="mySwiper"
            >
              {topSeller.length > 0 &&
                topSeller.map((element, index) => (
                  <SwiperSlide key={index}>
                    <div className="slide-container">
                      <div className="slide-number mb-1">{element.id}</div>
                      <div className="slide-icon-container mb-1">
                        {" "}
                        <img
                          className="user-icon"
                          src={element.avatar}
                          alt="React Logo"
                        />{" "}
                        <img
                          className="check-icon"
                          src={Check}
                          alt="check"
                        ></img>
                      </div>
                      <span className="slider-name mb-1">{element.name}</span>
                      <span className="mb-1">
                        <strong>5250 </strong>EHT
                      </span>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <span className="label-header">Hot Bids</span>
          </Col>
          <Col sm={12}>
            <Row>
              {hotBids.length > 0 &&
                hotBids.map((element, index) => (
                  <Col sm={3} className="mb-3" key={index}>
                    <div
                      className="hotbid-card mb-2"
                      key={index}
                      onClick={() => {
                        navigate(`/HotBidsDetail/${element.id}`);
                      }}
                    >
                      <img
                        className="hot-bids-img"
                        src={element.image}
                        alt="React Logo"
                      />
                      <span className="slider-name mb-1 mx-3">
                        {element.name}
                      </span>
                      <div className="hot-bids-footer">
                        <span className="hot-text-left">25 ETH</span>
                        <span className="hot-text-right">
                          <img className="mr-1 mb-1" src={Heart} alt="heart" />
                          <span className="mx-1">
                            {Math.floor(element.fav / 100)}
                          </span>
                        </span>
                      </div>
                    </div>
                  </Col>
                ))}
              <Col sm={12} className="load-wrapper">
                <Button
                  className="load-button"
                  variant="outline"
                  onClick={() =>
                    addMoreItem(hotBids.length, hotBids.length + 8)
                  }
                  disabled={hot_bids.length === hotBids.length}
                >
                  Load More
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Container>
  );
};

export default Explore;
