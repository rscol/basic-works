import React from "react";
import Grid from "./Grid";

const Team = () => {
  const gridData = [
    {
      imageUrl: "https://basicworks.com.ng/wp-content/uploads/2018/02/1man.jpg",
      heading: "SALAMI, Lateef Oyewole",
      h5Text: "MNSE - Chief Technical Officer",
      paragraph:
        "Salami Lateef an Electrical Engineer University of Ilorin with over 16 years with Specialization in Electrical Systems/Power Plant/Substation Engineering Salami has extensive knowledge and experience on the Nigerian power system, having worked as consultant and contractor on various generation, transmission, sub-transmission and distribution networks and facilities, EPC projects from con- ception to commissioning, operation and maintenance. He is an expert PC&M engineer on installation , testing and commissioning of IED based distance protection, transformer protection, generator protection and feeder protection schemes amongst others.",
    },
    {
      imageUrl: "https://basicworks.com.ng/wp-content/uploads/2018/02/2man.jpg",
      heading: "AJIBOLA, Olajide Sulaimon",
      h5Text: "Chief Operating Officer",
      paragraph:
        "Olajide Ajibola an Electrical & Electronics Engineer from The Polytechnic, Ibadan a versatile and resourceful engineer with experience in microprocessor program- ming, power supply systems, industrial electronic and automation engineering. He is experienced in conceptual design speciﬁcation, tender analysis, detailed de- sign & equipment evaluation for EPC projects from conception to commissioning, operation and maintenance.",
    },
    {
      imageUrl:
        "https://basicworks.com.ng/wp-content/uploads/2018/02/Untitled-300x260.jpg",
      heading: "ADELALU, Liaﬁs",
      h5Text: "Project Manager Electrical",
      paragraph:
        "Adelalu Liaﬁs is an Electrical Engineer with over 10 years experi- enced industrial practice in several professional development pro- grams in Electrical Power Engineering. Prior to joining Basic Works, Liaﬁs worked with various Electrical Maintenance and Engineering services companies, executing elec- trical power project across the nation as PHCN Contract Staﬀ. He later became a PHCN Contractor and sourced for services for the Benin Disco for 4 years, he has carried out projects for federal government parastatal, and private organization as an Engineering contractor .",
    },
    {
      imageUrl:
        "https://basicworks.com.ng/wp-content/uploads/2018/02/Untitled-1-300x260.jpg",
      heading: "AKINDELE, Raﬁu",
      h5Text: "Project Manager Mechanical",
      paragraph:
        "Akindele is an experienced Electro - Mechanical personnel who prior ti joining Basic Works gained his experience form hands on the job for over 5 years in Aklab Engineering Nigeria Limited.Mechanical Experience He has vast experience in piping fabrication and installation for utility lines (steam, raw water, compressed air chilled water in and out,). He has supervised pipe bridge fabrication and piping fabrication and installation of steam, conden- sate and gas line utility lines. He has experience in piping fabrication and installa- tion of ﬁre hydrant.",
    },
  ];

  return (
    <div className="bg-slate-200 lg:mx-14 lg:my-10 mx-4 p-6">
      <div className="bg-white px-8 py-5 mb-10 lg:mb-0">
        <h2 className="text-2xl lg:text-4xl text-center font-bold  ">
          Our Partners
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 justify-center items-center lg:mb-16">
        {gridData.map((data, index) => (
          <Grid
            key={index}
            imageUrl={data.imageUrl}
            heading={data.heading}
            h5Text={data.h5Text}
            paragraph={data.paragraph}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;
