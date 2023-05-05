import React, { useEffect, useState } from "react";
import Ozar1 from "../../assets/images/bg/Ozar1.png";
import Testimonial from "./Testimonial";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="bg-base-200">
      <div className="container mx-auto text-center pb-24">
        <h2 className="text-2xl font-bold">Client Testimonials</h2>
        <img src={Ozar1} className="mx-auto my-4" alt="" />
        <p>
          We have worked with hundreds of different clients around the globe.
          Check what a selection of them have to say about us.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 my-12 justify-center items-center">
        {reviews
          .map((review) => <Testimonial key={review._id} review={review}/>)
          .reverse()
        }
        </div>
        <h2 className="text-4xl font-bold">
          Discover how our 40 years of industry expertise can transform your
          business and explore the possibilities of our quality tools,
          competitive pricing and exceptional service standards.
        </h2>
        <button className="btn btn-outline btn-primary text-xl my-5">
          become our partner now
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
