import React from "react";

const Testimonials = () => {
  return (
    <section className="text-[#0d0e18] bg-white py-10 w-full">
      <h1 className="text-2xl md:text-3xl font-medium text-center">
        Testimonials
      </h1>
      <p className="text-center pb-2">
        Hear what people are saying about Wisdom Ezekiel
      </p>
          {/* Testimonies as a marquee*/}
          {/* <div className="mt-8 overflow-x-scroll h-[500px]"> */}
        <div className="mt-6 lg:h-[400px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 py-10 px-4 overflow-x-a">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-4 md:gap-6 px-4 py-8 bg-slate-100 rounded-md h-full"
          >
            <p className="text-start">{testimonial.testimony}</p>
            <div className="flex flex-col items-center justify-center gap-2">
              <h1 className="text-lg font-medium">{testimonial.name}</h1>
              <p className="text-sm">{testimonial.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

const testimonials = [
  {
    name: "John Doe",
    title: "CEO of ABC Company",
    testimony:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est molestiae harum, quam excepturi saepe quis magnam voluptas? Illum, atque incidunt? Dolor accusamus ipsa at expedita, molestias molestiae optio, autem totam commodi earum impedit.",
  },
  {
    name: "John Doe",
    title: "CEO of ABC Company",
    testimony:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est molestiae harum, quam excepturi saepe quis magnam voluptas? Illum, atque incidunt? Dolor accusamus ipsa at expedita, molestias molestiae optio, autem totam commodi earum impedit.",
  },
  {
    name: "John Doe",
    title: "CEO of ABC Company",
    testimony:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est molestiae harum, quam excepturi saepe quis magnam voluptas? Illum, atque incidunt? Dolor accusamus ipsa at expedita, molestias molestiae optio, autem totam commodi earum impedit.",
  },
];
