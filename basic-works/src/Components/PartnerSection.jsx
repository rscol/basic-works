import React from "react";

const PartnerSection = () => {
  const partnerImages = [
    "https://basicworks.com.ng/wp-content/uploads/2018/02/2clientchevron.jpg",
    "https://basicworks.com.ng/wp-content/uploads/2018/02/3client.jpg",
    "https://basicworks.com.ng/wp-content/uploads/2018/02/1clientairnigeria-150x60.jpg",
    "https://basicworks.com.ng/wp-content/uploads/2018/02/4clintetisalat.jpg",
    "https://basicworks.com.ng/wp-content/uploads/2018/02/5clientcbn.jpg",
    "https://basicworks.com.ng/wp-content/uploads/2018/02/6clienttema-150x119.jpg",
    "https://basicworks.com.ng/wp-content/uploads/2018/02/10clientabb-150x133.jpg",
    "https://basicworks.com.ng/wp-content/uploads/2018/02/9clientphcn-150x117.jpg",
    "https://basicworks.com.ng/wp-content/uploads/2018/02/8clientmikano-150x109.jpg",
    "https://basicworks.com.ng/wp-content/uploads/2018/02/7clientperkins.jpg",
  ];

  return (
    <div className="lg:mx-14 lg:my-20 my-10 mx-4 p-6">
      <h2 className="text-2xl lg:text-4xl lg:mb-0 mb-6 text-center font-bold">
        Our Partners
      </h2>
      <div className="grid grid-cols-3 lg:mx-16 lg:grid-cols-5 gap-8 lg:gap-24 justify-center items-center">
        {partnerImages.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Partner ${index}`}
            className="w-full h-auto"
          />
        ))}
      </div>
    </div>
  );
};

export default PartnerSection;
