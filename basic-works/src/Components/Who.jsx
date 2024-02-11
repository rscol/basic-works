import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const Who = () => {
  return (
    <div className="lg:mx-14 lg:my-20 mx-4 my-10 grid lg:grid-cols-2">
      <div className="col-span-1 bg-black">
        <img
          src="https://basicworks.com.ng/wp-content/uploads/2018/02/2man.jpg"
          alt="who"
          className="w-full h-full"
        />
      </div>
      <div className="col-span-1 mx-2 lg:mx-12  flex justify-center items-center">
        <div className="flex-col gap-8 my-10">
          <h2 className="text-3xl font-bold mb-4 text-gray-700">WHO WE ARE</h2>
          <p className="text-gray-500 lg:text-md font-medium text-sm leading-7 mb-8">
            Basic Works has been in inception since 2003 and became a Limited
            Liability Company in 2008. Basic Works is registered with the
            federal Republic of Nigeria. We are an Engineering and Contracting
            company with main focus on Industrial infrastructure, metal
            fabrication, Civil/Structural engineering, Control and Automation.
            Our departmentalization covers Industrial Panel fabrication LV, MV
            and control panels. Industrial Power department covers Power
            Substation, Generation, transmission and distribution, Industrial
            Mechanical and Fabrication department and Industrial electrical
            department. We also provide fire safety services and integrated fire
            suppression system as well as providing equipment's necessary to
            ensure safety in an organization.<br /> We are indeed the Gateway to Power
            & Engineering Solutions, Rendering ultimate services on Metal
            Fabrication, Electrical Works, Civil, Plumbing and many more at the
            best bargain ever. Providing solutions to our clients Engineering
            Needs is our motives. You are WELCOMED to our website !!!
          </p>
          <Link to="/AboutPage">
          <Button text="Learn More" variant="primary" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Who;
