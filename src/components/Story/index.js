import React from "react";

import person from "../../assets/images/person.jpg";

const Story = () => {
  return (
    <div className="flex justify-center mt-[100px] mb-[100px] ">
      <a
        href="#"
        class="flex flex-col items-center bg-gray-100 rounded-lg border shadow md:flex-row md:max-w-8xl hover:bg-yellow-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          class="object-cover w-full h-screen rounded-t-lg md:h-72 md:w-xl md:rounded-none md:rounded-l-lg"
          src={person}
          alt=""
        />
        <div class="container flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-4xl font-montserrat font-bold  tracking-tight text-gray-700 dark:text-white">
            Our Story
          </h5>
          <p class="mb-3 font-montserrat font-normal text-xl tracking-wider text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <button className="px-4 py-4 w-1/2 bg-slate-700 rounded font-montserrat text-md font-bold text-white mt-2 tracking-tight">Get Started</button>
        </div>
      </a>
    </div>
  );
};

export default Story;
