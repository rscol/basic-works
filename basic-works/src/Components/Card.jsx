import React from "react";

const Card = ({ icon, heading, paragraph, layout, circleBackgroundColor }) => {
  const isPageBLayout = layout === "pageB";

  const defaultCircleColor = isPageBLayout ? "#1d4ed8" : "#f3e8ff";
  const iconSizeClass = isPageBLayout ? "text-4xl" : "text-4xl";
  const circlePaddingClass = isPageBLayout ? "p-4" : "";
  const circleSizeClass = isPageBLayout ? "" : "w-16 h-16";

  const circleStyle = {
    backgroundColor: circleBackgroundColor || defaultCircleColor,
  };

  return (
    <div
      className={`flex ${
        isPageBLayout ? "flex-row" : "flex-col"
      } items-center mb-4`}
    >
      <div
        className={`rounded-full ${circlePaddingClass} mb-2 ${
          isPageBLayout ? "mr-4" : ""
        } ${circleSizeClass} flex items-center justify-center`}
        style={circleStyle}
      >
        <span className={`text-white text-center text-4xl  ${iconSizeClass}`}>{icon}</span>
      </div>
      <div className={`text-${isPageBLayout ? "left" : "center"}`}>
        <h2 className="lg:text-2xl text-xl font-bold mb-2 text-gray-700">{heading}</h2>
        <p className="text-gray-500">{paragraph}</p>
      </div>
    </div>
  );
};

export default Card;
