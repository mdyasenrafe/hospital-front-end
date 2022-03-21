import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Navigation } from "swiper/core";
import { getReviewApi } from "../../Api/Index";
import { Col, Card } from "react-bootstrap";
import Rating from "react-rating";

const Review = () => {
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await getReviewApi();
    setReview(res.data);
  };
  console.log(review);
  return (
    <section className="container py-5">
      <div className="text-center pb-4">
        <h1 className="fw-bold">
          <span>Our</span>
          <span className="text-red"> Review</span>
        </h1>
      </div>
      <Swiper
        navigation={true}
        slidesPerView={"auto"}
        spaceBetween={30}
        className="mySwiper"
      >
        {review.map((data) => (
          <SwiperSlide key={data._id}>
            <Col>
              <Card className="border-0 bg-light shadow-lg p-4 text-center">
                <div className="text-center">
                  <Card.Img
                    className="review-image"
                    variant="top"
                    src={data?.photo}
                  />
                </div>

                <Card.Body>
                  <Card.Text>{data?.name}</Card.Text>
                  <Card.Text>{data?.role}</Card.Text>
                  <Card.Text>{data?.description}</Card.Text>
                </Card.Body>
                <Card.Footer className="text-center border-0 bg-light">
                  <Rating
                    initialRating={data?.rating}
                    emptySymbol="far fa-star text-oragne"
                    fullSymbol="fas fa-star text-oragne"
                    readonly
                  ></Rating>
                </Card.Footer>
              </Card>
            </Col>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Review;
