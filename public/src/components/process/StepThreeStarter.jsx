import React from "react";

const StepThreeStarter = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-full px-4 py-10">
      <div className="flex flex-col gap-4 text-airbnb-light-black mb-6 md:mb-0">
        <div className="text-2xl">Step 3</div>
        <h1 className="text-4xl">
          <strong>Finish up and publish</strong>
        </h1>
        <p className="text-xl">
          Finally, you'll choose if you'd like to start with an experienced 
          guest, then you'll set your nightly price. Answer a few quick 
          questions and publish when you're ready.
        </p>
      </div>
      <div className="w-full max-w-lg">
        <video src="/home3.mp4" autoPlay loop controls={false} className="w-full"/>
      </div>
    </div>
  );
};

export default StepThreeStarter;
