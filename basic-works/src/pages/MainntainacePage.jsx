import React from "react";
import { FiPhone, FiMail } from "react-icons/fi"; // Import React icons

const MaintenancePage = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-between">
      <div className="xl:w-1/2 flex-1 flex flex-col items-center justify-center text-center px-4 lg:px-0">
        <img
          className="w-3/4"
          src="https://img.freepik.com/premium-photo/cartoon-workman-with-pneumatic-drill-works-progress-concept_764664-2865.jpg?w=740"
          alt="Under Maintenance"
        />
      </div>
      <div className="w-full py-4 border-t border-gray-300">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center text-gray-600 text-sm md:space-x-8 space-y-1 md:space-y-0">
          <span className="font-bold">You can contact us:</span>
          <a
            href="tel:+2349062774911"
            className="flex items-center space-x-1"
            title="Call"
          >
            <FiPhone className="h-4 w-4" /> {/* React Phone icon */}
            <span>(+234) 9062 774 911</span>
          </a>
          <a
            href="mailto:info@basicworks.com.ng"
            className="flex items-center space-x-1"
            title="Email"
          >
            <FiMail className="h-4 w-4" /> {/* React Email icon */}
            <span>info@basicworks.com.ng</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MaintenancePage;
