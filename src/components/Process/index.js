import React from "react";

const Process = () => {
  return (
    <div className="w-full h-auto flex flex-col justify-center bg-zinc-200">
        <div className="mb-8">
        <h2 className="font-montserrat font-bold text-4xl text-center mb-4">The process we follow</h2>
        <p className="font-montserrat font-light text-xl text-center tracking-tight mb-4">As a academy of business, we are going through the development cycle.</p>
        </div>
        <div className="container mx-auto flex flex-col md:flex-row justify-around">
      <div>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 bg-green-300 rounded-full px-4 mb-2 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </span>
        <h3 className="font-montserrat font-bold text-2xl text-center">Business idea</h3>
        <p className="font-montserrat font-medium text-md text-center">
          What you want your <br/> business to be
        </p>
      </div>
      <div className="mt-8">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 bg-yellow-200 rounded-full px-4 mb-2 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </span>
        <h3 className="font-montserrat font-bold text-2xl text-center">Planning</h3>
        <p className="font-montserrat font-medium text-md text-center tracking-tight">
          A business plan helps formalize <br/> your idea
        </p>
      </div>
      <div>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 bg-pink-200 rounded-full px-4 mb-2 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </span>
        <h3 className="font-montserrat font-bold text-2xl text-center">Develop</h3>
        <p className="font-montserrat font-medium text-md tracking-wider text-center">
          Ideation,prototyping of your <br/> product
        </p>
      </div>
      <div className="mt-8 ">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 bg-gray-300 rounded-full px-4 mb-2 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </span>
        <h3 className="font-montserrat font-bold text-2xl text-center">
          Business structure
        </h3>
        <p className="font-montserrat font-medium tracking-wider text-md text-center">
          Key parts of your business
        </p>
      </div>
      </div>
    </div>
  );
};

export default Process;
