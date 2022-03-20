import React from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

const Banner = () => {
  const bannerData = [
    {
      title: "The Future of",
      title2: "HealthCare is here",
      image: "https://i.ibb.co/nDyh08X/banner-1.jpg",
      description:
        "We at MediCare-health-center are always fully focused on helping your child and you and your family",
    },
    {
      title: "EveryOne ",
      title2: "DESERVES QUALITY ",
      image:
        " https://i.ibb.co/Drf3ZKr/bhmg-north-doctor-with-patient-1900x1258-76270c68.jpg",
      description:
        "We Actually Supply Them!   In addition to our existing ongoing safety procedures, we're taking extra measures to keep us all well.",
    },
    {
      title: "We Have",
      title2: "QUALIFIED Doctors ",
      image: "https://i.ibb.co/H7PyJbr/banner-3.jpg",
      description:
        " We’ve always maintained high standards of safety and cleanliness. Let us Help you find one that's right for you",
    },
  ];

  return (
    <Carousel fade>
      {bannerData.map((data) => (
        <Carousel.Item key={data.title}>
          <section
            className="banner d-flex align-items-center"
            style={{ height: "700px", backgroundImage: `url(${data.image})` }}
          >
            <div className="container banner-text px-4 px-sm-4 px-md-0">
              <h1 className="fw-bold mb-4">
                <span>{data.title}</span>
                <br />
                <span className="text-red">{data.title2}</span>
                <br />
              </h1>
              <h5 className="mb-4 banner-parragraph-text">
                <span className="text-black">{data?.description}</span>
              </h5>
              <Link to="/departments">
                <button className="btn bg-red py-2">Our Departments</button>
              </Link>
            </div>
          </section>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Banner;
