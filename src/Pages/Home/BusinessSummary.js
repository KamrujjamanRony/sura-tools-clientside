import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const BusinessSummary = () => {
  const [countOn, setCountOn] = useState(false);
  return (
    <div className="bg-base-200">
      <div className="container mx-auto text-center h-screen">
        <div>
          <h2 className="text-4xl font-bold text-black py-2 md:py-4 lg:py-24">
            About Sura Tools
          </h2>
          <p className="mb-5">
            The Sura Tools Brand is 40 years old and an BFS 9001:2015 certified
            company Headquartered in Bangladesh, USA, UAE. Sura Tools, the
            global tool brand from the house of Sura INTERNATIONAL PVT. LTD., is
            a world-renowned high-quality Tools manufacturing company. We are a
            leading supplier of ever-increasing “range” of high-quality tools
            used in a variety of markets and applications throughout the world.
          </p>
          <p className="">
            It’s something of a glory, but we genuinely are big enough to cope
            and small enough to care. Many of our team have backgrounds in
            manufacturing & construction, so we know only too well the
            importance of a reliable supplier.
          </p>
          <button className="btn btn-outline btn-accent text-xl my-5">
            Explore More
          </button>
        </div>
        <div className="bg-black my-2 md:mb-4 lg:mt-24 lg:mb-16">
          <h2 className="text-4xl font-bold text-white py-4">
            What Makes Us Different From Other Tool Manufacturers?
          </h2>
        </div>
        <div>
          <ScrollTrigger
            onEnter={() => setCountOn(true)}
            onExit={() => setCountOn(false)}
          >
            <div className="grid grid-cols-2 lg:grid-cols-4">
              <div className="stat">
                <div className="stat-value text-accent text-4xl lg:text-6xl">
                  {countOn && (
                    <CountUp
                      start={0}
                      end={3000}
                      delay={0}
                      duration={3}
                      suffix="+"
                    >
                      {({ countUpRef }) => (
                        <div>
                          <span ref={countUpRef} />
                        </div>
                      )}
                    </CountUp>
                  )}
                </div>
                <div className="stat-title font-bold text-black">Reviews</div>
              </div>

              <div className="stat">
                <div className="stat-value text-accent text-4xl lg:text-6xl">
                  {countOn && (
                    <CountUp
                      start={0}
                      end={40}
                      delay={0}
                      duration={3}
                      suffix="+"
                    >
                      {({ countUpRef }) => (
                        <div>
                          <span ref={countUpRef} />
                        </div>
                      )}
                    </CountUp>
                  )}
                </div>
                <div className="stat-title font-bold text-black">
                  Years of Operation
                </div>
              </div>

              <div className="stat">
                <div className="stat-value text-accent text-4xl lg:text-6xl">
                  {countOn && (
                    <CountUp
                      start={0}
                      end={99}
                      delay={0}
                      duration={3}
                      suffix="%"
                    >
                      {({ countUpRef }) => (
                        <div>
                          <span ref={countUpRef} />
                        </div>
                      )}
                    </CountUp>
                  )}
                </div>
                <div className="stat-title font-bold text-black">
                  On Time Delivery
                </div>
              </div>

              <div className="stat">
                <div className="stat-value text-accent text-4xl lg:text-6xl">
                  {countOn && (
                    <CountUp
                      start={0}
                      end={500}
                      delay={0}
                      duration={3}
                      suffix="+"
                    >
                      {({ countUpRef }) => (
                        <div>
                          <span ref={countUpRef} />
                        </div>
                      )}
                    </CountUp>
                  )}
                </div>
                <div className="stat-title font-bold text-black">
                  Customers Globally
                </div>
              </div>
            </div>
          </ScrollTrigger>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
