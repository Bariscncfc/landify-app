import React from "react";

import { service } from "./data";

const Services = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        <h2 className="font-montserrat tracking-wide text-4xl font-semibold text-center">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
              />
            </svg>
          </span>
          Services we provide
        </h2>
        <p className="font-montserrat font-light text-xl text-center tracking-tight mt-2 mb-4">
          We specialise in organising professional training courses.
        </p>
      </div>
      <div className="container grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
        {service.data.map((data, key) => {
          return (
            <div className="w-full h-auto bg-yellow-100 mr-4 px-8 py-8 rounded-lg">
              <h4 className="font-montserrat text-xl font-semibold text-black">
                {data.title}
              </h4>
              <p className="font-montserrat text-lg text-black mt-2">
                {data.desc}
              </p>
              <button
                type="button"
                class="py-2.5 px-5 mr-2 mb-2 mt-2 text-sm font-semibold tracking-wide text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Get Started
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
