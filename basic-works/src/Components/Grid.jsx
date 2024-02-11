import React from "react";

const Grid = ({ imageUrl, heading, paragraph, h5Text }) => {
  return (
    <div className="flex flex-col gap-4 items-start lg:h-5/6">
      <img
        src={imageUrl}
        alt="Placeholder"
        style={{ height: "200px" }}
        className="lg:w-full h-auto"
      />
      <h2 className="text-xl font-bold">{heading}</h2>
      {h5Text && <h5 className="font-medium">{h5Text}</h5>}
      <p className="text-slate-800 lg:text-[15px] text-sm leading-6">
        {paragraph}
      </p>
    </div>
  );
};

export default Grid;
