import React from "react";
import Banner from "./Banner";
import Manufacture from "./Manufacture";
import Service from "./Service";
import "./Home.css";
import BusinessSummary from "./BusinessSummary";
import Global from "./Global";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Ozar1 from "../../assets/images/bg/Ozar1.png";
import Tool from "../Tools/Tool";
import useTools from "../../hooks/useTools";

const Home = () => {
    const [tools] = useTools();
  return (
    <div className="home object-cover">
      <Banner />
      <Manufacture />
      <div className="bg-base-100">
        <div className="container mx-auto text-center pt-12 pb-24">
          <h2 className="text-2xl font-bold">Our Tools Range</h2>
          <img src={Ozar1} className="mx-auto my-4" alt="" />
          <p>
            We are the Quality Hand tools Manufacturer in Globally and offers
            Engineering Excellence for the world’s most demanding industries.
            Our Tools range includes Industrial Tools, Precision Tools, Cutting
            Tools, Air Tools and Lubrication tools etc. As a Leader in Tools
            Manufacturing Industry, we always focus on Quality and customer
            satisfaction Which makes us different from other Tools Manufacturing
            Companies.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-12 sm:min-w-96 items-center justify-center">
            {tools.map((tool) => (
              <Tool key={tool._id} tool={tool} />
            )).slice(0,6)}
          </div>
        </div>
      </div>
      <BusinessSummary />
      <Service />
      <Global />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;
