import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

const Manufacture = () => {
  const [flip, set] = useState(false);

  const words = ["Hand Tools", "Cutting Tools", "Industrial Tools", "Precision Tools"];

  const { scroll } = useSpring({
    scroll: (words.length - 1) * 50,
    from: { scroll: 1 },
    reset: true,
    loop: true,
    reverse: flip,
    config: { duration: 7000 },
    onRest: () => set(!flip),
  });

  return (
    <div className="w-full bg-black text-center py-2 text-white text-4xl font-bold md:flex md:justify-center">
      <div>
        <p>We Are Manufacture </p>
      </div>
      <div className="ml-16 text-primary text-left">
      <animated.div
        style={{
          position: "relative",
          width: "300px",
          height: 50,
          overflow: "hidden",
          fontSize: "1em",
        }}
        scrollTop={scroll}
      >
        {words.map((word, i) => (
          <div
            key={`${word}_${i}`}
            style={{ width: "100%", height: 50, textAlign: "left" }}
          >
            {word}
          </div>
        ))}
      </animated.div>
      </div>
    </div>
  );
};

export default Manufacture;
