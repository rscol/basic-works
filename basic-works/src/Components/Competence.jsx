import React from 'react'
import Grid from './Grid';

const Competence = () => {
  const gridData = [
    {
      imageUrl:
        "https://basicworks.com.ng/wp-content/uploads/2018/01/Untitled2.jpg",
      heading: "Industrial Automation & Control Systems",
      paragraph:
        "Basic Works  as an Industrial company has the capabilities of handling all several industrial automation & control services. Basics is gotten experience, equipment's & modern technologies in automating your our clients operations.",
    },
    {
      imageUrl:
        "https://basicworks.com.ng/wp-content/uploads/2018/02/2-300x260.jpg",
      heading: "Rural Electrification",
      paragraph:
        "Basic Works as an electrical engineering company has the capabilities and experience of handling several rural electrification projects such as Power plant, Transformer and more installations.",
    },
    {
      imageUrl:
        "https://basicworks.com.ng/wp-content/uploads/2018/02/Untitled-300x260.jpg",
      heading: "Testing & Inspection",
      paragraph:
        "Basic Works handles several testing & Inspection of any projects they did. It is a part service offered to our clients at the best bargain ever. Inspection & testing of works such as generators, Power Plants, Panel e.t.c.",
    },
    {
      imageUrl:
        "https://basicworks.com.ng/wp-content/uploads/2018/02/Untitled-1-300x260.jpg",
      heading: "Telecommunication",
      paragraph:
        "Basic Works  has the capabilities of installing several telecommunications devices such as CCTV, Ip Camera and many more.",
    },
  ];

  return (
    <div className="bg-slate-300 lg:mx-14 lg:my-10 mx-4 p-6">
      <div className="bg-white px-8 py-5">
        <h2 className="text-2xl lg:text-4xl text-center font-bold  ">
          Our Competence
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 justify-center items-center lg:mb-12">
        {gridData.map((data, index) => (
          <Grid
            key={index}
            imageUrl={data.imageUrl}
            heading={data.heading}
            paragraph={data.paragraph}
          />
        ))}
      </div>
    </div>
  );
}

export default Competence