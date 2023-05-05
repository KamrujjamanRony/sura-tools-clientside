import React from "react";
import Ozar2 from "../../assets/images/bg/Ozar2.png";

const Service = () => {
  return (
    <div className="lg:max-h-md md:max-h-sm bg-transparent py-24">
      <div className="container mx-auto text-center text-white">
        <h2 className="text-2xl font-bold">Why Choose Us?</h2>
        <img src={Ozar2} className="mx-auto my-2" alt="" />
        <p>
          Ever since, we have dedicated ourselves to making industrial Hand
          tools with the goal to become the best manufacturers of Hand Tools in
          the World. Here’s some reasons why we’re unique
        </p>
        <div className="hidden md:block">
        <div className="grid lg:grid-cols-3 md:grid-cols-2">
          <div className="card w-96 bg-inherit">
            <figure className="px-10 pt-10">
              <img
                src="https://www.aloktools.com/wp-content/uploads/2018/05/idea.png"
                alt=""
                className=""
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Expertise & Innovation</h2>
              <p>
                Since 1978 we’ve been supplying the highest quality tools to a variety of specialist markets.
              </p>
            </div>
          </div>
          <div className="card w-96 bg-inherit">
            <figure className="px-10 pt-10">
              <img
                src="https://www.aloktools.com/wp-content/uploads/2018/05/quality.png"
                alt=""
                className=""
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Quality</h2>
              <p>
              We have developed a culture of continuous improvement. We give guarantee against any manufacturing defect.
              </p>
            </div>
          </div>
          <div className="card w-96 bg-inherit">
            <figure className="px-10 pt-10">
              <img
                src="https://www.aloktools.com/wp-content/uploads/2018/05/support.png"
                alt=""
                className=""
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Service & Support</h2>
              <p>
              We have invested heavily to ensure that our products, processes and customer service are second to none.
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
