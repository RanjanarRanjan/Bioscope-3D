import React from "react";
import { arrow ,Skeletal,Muscular ,Nervous ,Digestive ,Respiratory ,Circulatory} from "../assets/images";

const BoxGridAnatomy = () => {
 

  const boxes = [
    { id: 1, imageUrl: Skeletal, text: "Skeletal System" },
    { id: 2, imageUrl: Muscular, text: "Muscular System" },
    { id: 3, imageUrl: Nervous , text: "Nervous System" },
    { id: 4, imageUrl: Digestive, text: "Digestive System" },
    { id: 5, imageUrl: Respiratory, text: "Respiratory System" },
    { id: 6, imageUrl: Circulatory, text: "Circulatory System" },
  ];

  return (
    <div className="bg-white px-6 py-12 md:px-12 lg:px-24">
      <section className="text-center mb-10">
        <h2 className="text-2xl font-semibold text-blue-800 mb-1">AnatomyScope</h2>
        <h1 className="text-4xl font-bold text-gray-800">Human Anatomy Explorer</h1>
      </section>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {boxes.map((box) => (
          <div
            key={box.id}
            className="border border-gray-200 rounded-2xl shadow-md p-5 text-center hover:shadow-lg transition-all duration-300"
          >
            <img
              src={box.imageUrl}
              alt={box.text}
              className="w-full h-40 object-contain mb-4"
            />
            <p className="text-lg font-medium text-gray-700">{box.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <button
         
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition-all"
        >
          View More
          <img src={arrow} alt="arrow" className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default BoxGridAnatomy;
