// ContactUs.js
import React from "react";
import Button from "./Button";

const ContactUs = () => {
  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
      <div className="bg-white max-w-4xl mx-auto w-full">
        <div className="grid lg:grid-cols-6 h-full">
          <div className="bg-blue-900 p-10 lg:col-span-2 col-span-4">
            <h2 className="mb-10 font-bold text-2xl text-blue-100 before:block before:absolute before:bg-sky-300 before:content[''] relative before:w-20 before:h-1 before:-skew-y-3 before:-bottom-4">
              Contact Information
            </h2>
            <p className="font-bold text-blue-100 py-8 border-b border-blue-700">
              Location Address
              <span className="font-normal text-xs text-blue-300 block">
                Suite A12 Humuani Plaza, 82 Kudirat Abiola Way, Oregun, Ikeja
              </span>
            </p>
            <p className="font-bold text-blue-100 py-8 border-b border-blue-700">
              Phone Number
              <span className="font-normal text-xs text-blue-300 block">
                (+234) 9062 774 911
              </span>
            </p>
            <p className="font-bold text-blue-100 py-8 border-b border-blue-700">
              Email Address
              <span className="font-normal text-xs text-blue-300 block">
                info@basicworks.com.ng
              </span>
            </p>
          </div>
          <div className="bg-blue-100 lg:p-14  p-6 col-span-4">
            <h2 className="mb-14 font-bold text-4xl text-blue-900 before:block before:absolute before:bg-sky-300 before:content[''] relative before:w-20 before:h-1 before:-skew-y-3 before:-bottom-4">
              Send Us a Message
            </h2>
            <div className="grid gap-6 mb-6 grid-cols-2">
              <div className="flex flex-col">
                <input
                  className="py-4 bg-white rounded-full px-6 placeholder:text-xs"
                  aria-placeholder="Your name"
                  placeholder="Your first name"
                />
              </div>
              <div className="flex flex-col">
                <input
                  className="py-4 bg-white rounded-full px-6 placeholder:text-xs"
                  aria-placeholder="Your name"
                  placeholder="Your last name"
                />
              </div>
            </div>
            <div className="grid gap-6 mb-6 grid-cols-2">
              <div className="flex flex-col">
                <input
                  className="py-4 bg-white rounded-full px-6 placeholder:text-xs"
                  aria-placeholder="Your email"
                  placeholder="Email Address"
                />
              </div>
              <div className="flex flex-col">
                <input
                  className="py-4 bg-white rounded-full px-6 placeholder:text-xs"
                  aria-placeholder="Subject"
                  placeholder="Subject"
                />
              </div>
            </div>
            <div className="mb-6">
              <textarea
                className="w-full rounded-2xl placeholder:text-xs px-6 py-4"
                placeholder="Your message here"
                name=""
                id=""
                rows="8"
              ></textarea>
            </div>
            <div className="flex justify-center">
              <Button text="Submit" variant="primary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
