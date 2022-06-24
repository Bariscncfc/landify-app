import React from "react";

const Footer = () => {
  return (
    <div className="mt-8">
      <footer class="p-4 bg-gray-500 font-montserrat text-xl tracking-wide rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
        <span class="text-sm text-white sm:text-center dark:text-gray-400">
          © 2022{" "}
          <a href="https://flowbite.com/" class="hover:underline">
            Barış Can Çifçi
          </a>
          . All Rights Reserved.
        </span>
        <ul class="flex flex-wrap items-center mt-3 text-sm border-b-4 text-white dark:text-gray-400 sm:mt-0">
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6 ">
              Product
            </a>
          </li>
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">
              Solutions
            </a>
          </li>
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">
              Resources
            </a>
          </li>
          <li>
            <a href="#" class="hover:underline">
              Pricing
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
