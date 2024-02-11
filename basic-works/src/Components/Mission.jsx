import React from "react";
import Card from "./Card";
import { FaBalanceScale, FaCogs,  FaRegEye } from "react-icons/fa";

const Mission = () => {
  const cardData = [
    {
      heading: "Mission Statement",
      icon: <FaCogs />,
      paragraph:
        "To be able to deploy professionalism in building an all-round engineering outfit that positively affects lives.",
      layout: "pageB",
      iconBackgroundColor: "#f4f4f4",
    },
    {
      heading: "Vision Statement",
      icon: <FaRegEye />,
      paragraph:
        "To be a foremost one-stop indigenous engineering outfit affecting lives positively deploying best practices.",
      layout: "pageB",
      iconBackgroundColor: "#f4f4f4",
    },
    {
      heading: "Core Values",
      icon: <FaBalanceScale />,
      paragraph:
        "Professionalism and resourcefulness Integrity and Versatility Team Spirit and Creativity",
      layout: "pageB",
      iconBackgroundColor: "#f4f4f4",
    },
  ];

  return (
    <div>
      <div className="grid lg:grid-cols-3 mx-4 my-6 lg:my-32 lg:mx-20 items-center justify-center gap-6 lg:gap-16 w-full md:w-auto">
        {cardData.map((card, index) => (
          <Card
            key={index}
            heading={card.heading}
            icon={card.icon}
            paragraph={card.paragraph}
            layout={card.layout}
          />
        ))}
      </div>
    </div>
  );
};

export default Mission;
