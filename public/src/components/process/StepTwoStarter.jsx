import React from "react";

const StepTwoStarter = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-full mx-4 md:mx-20 gap-10">
      <div className="flex flex-col gap-4 text-airbnb-light-black text-center md:text-left">
        <div className="text-xl md:text-2xl">Step 2</div>
        <h1 className="text-2xl md:text-4xl font-bold">
          Make your place stand out
        </h1>
        <p className="text-lg md:text-xl">
          In this step, you'll add some of the amenities your place offers,
          plus 5 or more photos. Then you'll create a title and description.
        </p>
      </div>
      <div className="w-full max-w-md">
        <video src="/home2.mp4" autoPlay loop controls={false} className="w-full h-auto"/>
      </div>
    </div>
  );
};

export default StepTwoStarter;
