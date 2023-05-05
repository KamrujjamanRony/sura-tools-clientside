import React from "react";
import Ozar1 from "../../assets/images/bg/Ozar1.png";
import useTools from "../../hooks/useTools";
import Tool from "./Tool";

const Tools = () => {
    const [tools] = useTools();
  return (
    <div className="bg-base-100">
      <div className="container mx-auto text-center pt-12 pb-24">
        <h2 className="text-2xl font-bold">Our Tools Range</h2>
        <img src={Ozar1} className="mx-auto my-4" alt="" />
        <p>
          We are the Quality Hand tools Manufacturer in Globally and offers
          Engineering Excellence for the world’s most demanding industries. Our
          Tools range includes Industrial Tools, Precision Tools, Cutting Tools,
          Air Tools and Lubrication tools etc. As a Leader in Tools
          Manufacturing Industry, we always focus on Quality and customer
          satisfaction Which makes us different from other Tools Manufacturing
          Companies.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-12 sm:min-w-96 items-center justify-center">
          {tools.map(tool => (
            <Tool
              key={tool._id}
              tool={tool}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tools;
