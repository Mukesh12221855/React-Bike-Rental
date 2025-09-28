import React from "react";
import Slider from "react-slick";

import "../../styles/testimonial.css";

import ava01 from "../../assets/all-images/mukesh.jpg";
import ava02 from "../../assets/all-images/vishnu.jpg";
import ava03 from "../../assets/all-images/sai.jpg";
import ava04 from "../../assets/all-images/pramodh.jpg";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p className="section__description">
        Renting a bike was the best decision during my trip! It gave me the freedom to explore hidden gems at my own pace. 
        The bikes were super clean and easy to ride. I felt completely safe and supported the whole time.
         I’ll definitely rent again on my next visit!
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava01} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Mukesh</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        "As a college student, this service is a lifesaver! I use it to get to class and around town. 
        It’s affordable and way faster than public transport. Plus, the bikes are always in great shape. Totally worth it!"
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava02} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Vishnu</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        "I use the bike rental service every day to commute to work. It saves me time, money, and stress. 
        No more waiting for buses or getting stuck in traffic. The convenience and quality of bikes are unmatched!"
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava03} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Sai</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        "I had a great experience with this bike rental service! The booking process was super easy, the bikes were in excellent condition, and the ride was smooth throughout. 
        I explored the entire city without any hassle. Highly recommended for anyone looking for a budget-friendly and reliable way to get around!"
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava04} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Pramodh</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;
