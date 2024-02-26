import React from "react";

import { features } from "../data";
// import "aos/dist/aos.css"; // Import the styles

// import AOS from "aos"; // Import the AOS library
const Features = () => {

//   AOS.init({
//     duration: 1500,
//     once: true,
//     offset:50
//   });
  const { title, subtitle, image, buttonText, items } = features;

  return (
  <div data-aos="fade-left ">

    <section className="section">
      <div className="container mx-auto mt-10 lg:mt-12 sm:-mt-20 ssm:-mt-24 md:-mt-20">
        <div className="flex flex-col lg:flex-row lg:gap-[100px]">
          {/* images */}
          <div className="flex-1 order-1 lg:-order-1">
            <img src={image.type} alt="" />
          </div>

          {/* title */}
          <div className="flex-1 flex flex-col justify-end">
            <h2 className="title">{title}</h2>
            <p className="subtitle">{subtitle}</p>
            <div>
  {items.map((item, index) => {
    // destructure item 
    const {title, subtitle, icon} = item;
  return <div className="flex mb-6 lg:last:mb-0">
    <div className="text-2xl mr-4 lg:text-3xl">{icon}</div>
    <div>
      <h4 className="text-base lg:text-xl font-semibold mb-3">{title}</h4>
      <p>{subtitle}</p>
    </div>
  </div>
  })}
</div>
          </div>

{/* items */}

        </div>
      </div>
    </section>
    </div>
  );
};

export default Features;
