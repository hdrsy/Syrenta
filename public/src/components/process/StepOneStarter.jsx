import React from "react";

const StepOneStarter = () => {
  return (
    <div className="flex flex-col md:flex-row items-center mx-4 md:mx-20 my-10">
      <div className="md:w-1/2 flex flex-col gap-4 text-airbnb-light-black mb-6 md:mb-0">
        <div className="text-2xl md:text-3xl">Step 1</div>
        <h1 className="text-3xl md:text-4xl font-bold">
          Tell us about your place
        </h1>
        <p className="text-lg md:text-xl">
          In this step, we'll ask you which type of property you have and if 
          guests will book the entire place or just a room. Then let us know
          the location and how many guests can stay.
        </p>
      </div>
      <div className="md:w-1/2">
        <div className="w-full overflow-hidden">
          <video src="/home.mp4" autoPlay loop controls={false} className="w-full h-auto"/>
        </div>
      </div>
    </div>
  );
};

export default StepOneStarter;
