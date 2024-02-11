import React, { useState, useEffect } from "react";
import Button from "./Button";

const Hero = () => {
  const images = [
    "https://media.istockphoto.com/id/116723120/photo/electrical-transformer-sub-station.webp?b=1&s=170667a&w=0&k=20&c=Oq1FZRP0ulV-vC3sdItMaDsEEMxBrG8t5Ei12ul72LA=",
    "https://media.istockphoto.com/id/1288470489/photo/electric-power-transmission.webp?b=1&s=170667a&w=0&k=20&c=321RojGGJYljDh9zvihNUVKD095eiGlQFySoQ1cfqTo=",
    "https://media.istockphoto.com/id/1470782264/photo/power-transformer-at-the-substation-with-the-rays-of-the-morning-sun-energy-cold-winter-dawn.webp?b=1&s=170667a&w=0&k=20&c=RrBG3oa1sl8mEdKNzLXZZXLdVSj5Vcfsvw8G-Q5TJqE=",
  ];

  const texts = [
    { topText: "Industrial Automation", bottomText: "We are ever ready" },
    { topText: "Power Transmission", bottomText: "We are competent" },
    { topText: "Industial Power", bottomText: "You can bank on us" },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="grid lg:grid-cols-2 relative">
      <div className="col-span-1 lg:px-14 lg:py-0 py-6 px-4 flex items-center">
        <div>
        <h2 className="lg:text-6xl text-4xl mb-6 font-bold text-gray-900">
          Basic Works: <span className="lg:text-5xl text-2xl"> Your Gateway to Power & Engineering Solutions.</span>
        </h2>
        <p className="text-lg mb-8 leading-7 font-medium text-gray-900">Specializing in industrial infrastructure, metal fabrication, civil engineering, and electrical works. We provide integrated fire safety solutions and equipment. Welcome to our ultimate engineering services!</p>
        <Button text="Get Started" variant="primary" />
        </div>
      </div>
      <div className="col-span-1 flex justify-center items-center relative">
        <img
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex}`}
          className="w-full "
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <div className="bg-blue-400 p-4 lg:text-2xl text-sm font-medium text-white">
            <p>{texts[currentImageIndex].topText}</p>
          </div>
          <div className="bg-slate-400 p-3 mt-4 text-slate-100">
            <p>{texts[currentImageIndex].bottomText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
