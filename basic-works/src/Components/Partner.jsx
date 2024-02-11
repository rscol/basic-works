import React from "react";

const Partner = ({ partnerImages }) => {
  // Function to chunk the partnerImages array into arrays of 4 items each
  const chunkArray = (array, size) => {
    const chunkedArr = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArr.push(array.slice(i, i + size));
    }
    return chunkedArr;
  };

  // Chunk the partnerImages array into arrays of 4 items each
  const partnersChunks = chunkArray(partnerImages, 4);

  return (
    <div className="partner-container">
      {partnersChunks.map((chunk, index) => (
        <div key={index} className="partner-row">
          {chunk.map((partner, idx) => (
            <img
              key={idx}
              src={partner}
              alt={`Partner ${idx}`}
              className="partner-image"
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Partner;
