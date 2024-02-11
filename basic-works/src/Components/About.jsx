import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="relative lg:h-[50vh] h-[30vh] flex justify-center items-center overflow-hidden">
        {/* Image as the background */}
        <img
          src="https://media.istockphoto.com/id/1423990264/photo/diversity-professional-engineer-training-and-discussing-in-robot-development-plant.webp?b=1&s=170667a&w=0&k=20&c=7XvVgL9Rhywr-l0AA_9qZy23t7U3B5wXzsmdx4wtK2E="
          alt="Background"
          className="absolute inset-0 object-fit w-full h-full"
          style={{ objectPosition: "center" }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 z-10 bg-black opacity-50"></div>

        {/* Content */}
        <div className="z-20 text-white text-center">
          <h1 className="lg:text-6xl text-3xl font-bold">About US</h1>
          <p className="mt-4">
            Basic works is a leading engineering services company
          </p>
        </div>
      </div>
      <div className="lg:my-20 my-10 lg:mx-16 mx-4">
        <h2 className="lg:text-4xl text-2xl text-center font-semibold mb-4">
          Our Company's Profile
        </h2>
        <p className="text-sm lg:text-[15px] leading-6 mb-2">
          <span className="font-bold">Basic Works</span> is an
          engineering/contracting company that has layed a giant strides
          foundation in the engineering profession. As our motto stands "The
          Gateway to Power & Engineering solutions" so therefore, since her
          inception we have been providing satisfactory engineering services to
          her growing list of her clientele. The activities of the company span
          Oil & Gas, Power, Banking Government parastatals as well as the
          Industrial sector of the Nigerian economy.
        </p>
        <p className="text-sm lg:text-[15px] leading-6 mb-2">
          <span className="font-bold">Basic Works</span> has been in inception
          since 2003 and became a Limited Liability Company in 2008. BW
          Industrial Limited is registered with the federal Republic of Nigeria
        </p>
        <p className="text-sm lg:text-[15px] mb-2 leading-6">
          <span className="font-bold">Basic Works</span> has the capabilities
          and experience to execute multi-disciplinary projects. These include,
          but not limited to, engineering, procurement and assembly, equipment
          testing, installation and erection, commissioning as well as after
          sales services of Power Generating Sets.
        </p>
        <p className="text-sm lg:text-[15px] mb-2 leading-6">
          Basic Works is an industrial infrastructure development company.{" "}
          <span className="font-medium text-lg">Basic Works</span> is registered
          with the federal Republic of Nigeria. We are an Engineering and
          Contracting company with focus on Industrial infrastructure, metal
          fabrication, Civil/Structural engineering, Control and Automation.
        </p>
        <p className="text-sm lg:text-[15px] mb-2 leading-6">
          We also provide Telecommunication, Automation Security fire safety
          services and integrated fire suppression equipment necessary to ensure
          safety in industries and organizations.
        </p>
        <p className="text-sm lg:text-[15px] font-medium mb-2 leading-6">
          Power system Audit, Power Substation, Generation, transmission and
          distribution.
        </p>
        <p className="text-sm lg:text-[15px] leading-6">
          We assure you that our company is more than ready to serve your
          esteemed organization with the view of supporting you to achieve your
          set goals and objectives.
        </p>
      </div>

      <div className="lg:my-20 my-10 lg:mx-24 mx-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="col-span-1 text-gray-700 lg:mb-0 mb-6">
            <h2 className="lg:text-3xl text-2xl font-bold text-center mb-4">
              OUR SERVICES
            </h2>
            <ul className="list-disc">
              <li className="mb-1">Power System Protection, Control and Metering.</li>
              <li>
                Equipment Maintenance Inspection, Testing, Calibration, and
                Refurbishment.
              </li>
              <li className="mb-1">
                Installation, Testing, and Commissioning HV, MV & LV
                Switchgears.
              </li>
              <li className="mb-1">
                Repair and Servicing of Generators, Transformers, and Electric
                Motors.
              </li>
              <li className="mb-1">
                Design & Construction LV switchgears, Motor Control Centres, and
                Control Panels.
              </li>
              <li className="mb-1">
                Power Plant Equipment & Systems Commissioning and Acceptances
                Services.
              </li>
              <li className="mb-1">
                Supply, Installation & Maintenance of Inverters, UPS, and
                Industrial Stabilizers.
              </li>
              <li className="mb-1" >Power Quality Analysis.</li>
              <li className="mb-1" >Grounding System and Lightning Protection.</li>
              <li className="mb-1" >Training.</li>
            </ul>
          </div>
          <div className="col-span-1 text-gray-700">
            <h2 className="lg:text-3xl tex-2xl font-bold text-center mb-4">
              OUR FEATURED PROJECTS
            </h2>
            <ul className="list-disc ">
              <li className="mb-4">
                <h3 className="text-lg font-semibold">
                  Resolution of 330/132/33kV Switchyard Post commissioning snag
                  items at Lot 1 Calabar Power Station
                </h3>
                <p className="text-sm">
                  On behalf of Alstom Grid UK. This involved setting downloads
                  and configuration of PSI files with MiCOM S1 software
                  including the resolution of discrepancies on the Tariff Meters
                  on GTGs 1 – 5. (January 2016) Completed
                </p>
              </li>
              <li className="mb-4">
                <h3 className="text-lg font-semibold">
                  Installation, Testing and Commissioning of GE Frame 6 Gas
                  Turbine Generator Unit 2 and the 60MVA 10.5/132kV Generator
                  Step Up Transformer Protection system
                </h3>
                <p className="text-sm">
                  This included the protection of the 2.5MVA 10.5/3.3kV Unit
                  Auxiliary Transformer and the commissioning of 132kV GT2 Bay 4
                  in the switchyard of Ibom Power Company Limited, Ikot-Abasi,
                  Akwa Ibom State. (Sept 2015 – May 2016) Completed
                </p>
              </li>
            </ul>
            <p className="text-sm font-bold">View other featured projects <Link className="text-blue-500" to="/Projects">here</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
