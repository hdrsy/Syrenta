
import Image from "next/image";
import React from "react";

const Overview = () => {

  const mainTitle = "It's easy to get started on syrenta";
  const data = [
    {
      title: "Tell us about your place",
      description: "Share some basic info, such as where it is and how many guests can stay.",
      image: "/overview1.webp",
    },
    {
      title: "Make it stand out",
      description: "Add 5 or more photos plus a title and description - we'll help you out.",
      image: "/overview2.webp",
    },
    {
      title: "Finish up and puplish",
      description: "Choose if you'd like to start with an experienced guest, set a starting price and publish your listing.",
      image: "/overview3.webp",
    },
  ]
  return (
    <div className="flex flex-col md:flex-row h-full justify-between items-center px-5 md:px-32 gap-10 md:gap-20">
      <div className="text-center md:text-left">
        <strong>
          <h1 className="text-3xl md:text-5xl leading-normal text-airbnb-light-black">
            {mainTitle}
          </h1>
        </strong>
      </div>
      <ul className="flex flex-col gap-10">
        {data.map(({ description, title, image }, index) => (
          <li key={title} className="flex flex-col md:flex-row items-center justify-start gap-6">
            <strong className="text-2xl pt-5 text-airbnb-light-black">
              <h3>{index + 1}</h3>
            </strong>
            <div className="pt-5">
              <strong className="text-xl md:text-2xl text-airbnb-light-black">
                <h3>{title}</h3>
              </strong>
              <p className="text-airbnb-light-gray">{description}</p>
            </div>
            <div className="relative w-full md:w-48 h-32 object-cover">
              <Image src={image} alt="overview" layout="fill" objectFit="cover" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default Overview;
