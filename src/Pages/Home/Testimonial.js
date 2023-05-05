import React from "react";

const Testimonial = ({ review }) => {
  return (
    <div className="card max-w-lg mx-auto border border-slate-300 rounded">
      <div className="card-body">
        <p className="text-xl italic">"{review.review}"</p>
        <div className="card-actions justify-start">
          <div className="avatar">
            <div className="w-8 rounded-full">
              <img src={review.image} alt="" />
            </div>
          </div>
          <span className="text-sm font-bold">{review.name}</span>
          <span className="text-sm font-thin">{review.ratting} star</span>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
