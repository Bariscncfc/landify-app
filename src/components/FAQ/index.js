import React from "react";

const FAQ = () => {
  return (
    <div>
      <section className="py-12 md:py-20 px-6 md:px-0 bg-white">
        <div className="m-auto max-w-default">
          <div className="text-center">
            <h2 className="md:text-5xl font-montserrat text-3xl text-gray-800 font-bold">
              {" "}
              Frequent Questions
            </h2>
          </div>
          <div className="mt-10 md:mt-16">
            <div className="md:max-w-3xl m-auto">
              <details className="border-b-2">
                <summary className="p-4 text-gray-800 font-montserrat font-bold cursor-pointer pt-5 mb-1 text-lg focus:text-blue-700">
                  Will I get lifetime updates?
                </summary>
                <p className="py-2 px-3 text-gray-600 font-montserrat">
                  Landify is a landing page UI kit for Figma. The kit consists
                  of 170+ blocks from 15 categories with ready-to-use sample
                  pages. Also,it comeswith blocks for desktop,tablet and mobile
                  layouts.
                </p>
              </details>
              <details className="border-b-2">
                <summary className="p-4 text-gray-800 font-montserrat font-bold cursor-pointer pt-5 mb-1 text-lg focus:text-blue-700">
                  Can I use the Landify for a client's product?
                </summary>
                <p className="py-2 px-3 font-montserrat text-gray-600">
                  Landify is a landing page UI kit for Figma. The kit consists
                  of 170+ blocks from 15 categories with ready-to-use sample
                  pages. Also,it comeswith blocks for desktop,tablet and mobile
                  layouts.
                </p>
              </details>
              <details className="border-b-2">
                <summary className="p-4 text-gray-800 font-montserrat font-bold cursor-pointer pt-5 mb-1 text-lg focus:text-blue-700">
                  Does Landify provide code kit as well?
                </summary>
                <p className="py-2 px-3 font-montserrat text-gray-600">
                  Landify is a landing page UI kit for Figma. The kit consists
                  of 170+ blocks from 15 categories with ready-to-use sample
                  pages. Also,it comeswith blocks for desktop,tablet and mobile
                  layouts.
                </p>
              </details>
              <details className="border-b-2">
                <summary className="p-4 font-montserrat text-gray-800 font-bold cursor-pointer pt-5 mb-1 text-lg focus:text-blue-700">
                  Do you have a free trial of Landify
                </summary>
                <p className="py-2 px-3 font-montserrat text-gray-600">
                  Landify is a landing page UI kit for Figma. The kit consists
                  of 170+ blocks from 15 categories with ready-to-use sample
                  pages. Also,it comeswith blocks for desktop,tablet and mobile
                  layouts.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
