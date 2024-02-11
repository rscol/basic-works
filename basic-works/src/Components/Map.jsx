// src/components/Map.js
import React from "react";

const Map = () => {
  return (
    <div className="flex justify-center items-center h-screen ">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.392907371896!2d3.365103809802116!3d6.597994593368242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b92456bc968c9%3A0x48fa0ad87d5d35ff!2s82%20Kudirat%20Abiola%20Way%2C%20Oregun%2C%20Lagos%20101233%2C%20Lagos!5e0!3m2!1sen!2sng!4v1707666372748!5m2!1sen!2sng"
        width="1000"
        height="600"
              style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
