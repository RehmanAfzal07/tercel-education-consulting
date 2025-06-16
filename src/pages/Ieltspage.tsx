import React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

const Ieltspage = () => {
  const brand = [
    { score: "9", review: "Expert User" },
    { score: "8.0-8.5", review: "Very Good User" },
    { score: "7.0-7.5", review: " Good User" },
    { score: "6.0-6.5", review: "Competent User" },
    { score: "5.0-5.5", review: "Modest User" },
    { score: "4.-0-4.5", review: "Limited User" },
  ];

  const IletsPoints = [
    {
      heading: "🎧Listning",
      description: "Master the art of understanding spoken English in various accents and contexts.",
      points: [
        { first: "1 point" },
        { second: "2 point" },
        { third: "3 point" },
        { fourth: "4 point" },
      ],
    },
    {
      heading: "📖Reading",
      description: "Develop comprehensive reading skills for academic and general contexts.",
      points: [
        { first: "1 point" },
        { second: "2 point" },
        { third: "3 point" },
        { fourth: "4 point" },
      ],
    },
    {
      heading: "✏️Writing",
      description: "Enhance your writing skills for academic and general writing tasks.",
      points: [
        { first: "1 point" },
        { second: "2 point" },
        { third: "3 point" },
        { fourth: "4 point" },
      ],
    },
    {
      heading: "🗣️Speaking",
      description: "Build confidence and fluency in spoken English communication.",
      points: [
        { first: "1 point" },
        { second: "2 point" },
        { third: "3 point" },
        { fourth: "4 point" },
      ],
    },
  ];
  return (
    <>
      <div className="mt-10 bg-gray-100 w-full ">
        <div className="mt-2 p-2 ">
          <h1 className="text-blue-900 text-center text-2xl font-bold">
            {" "}
            🎯 IELTS Preparation
          </h1>
          <p className="text-sm font-light text-center"></p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 justify-center">
          {IletsPoints.map((p, index) => (
            <div key={index} className=" flex justify-center w-full ">
              <Card className="bg-white text-md font-semibold rounded  w-9/10 overflow-auto group p-2 shadow-gray-400">
                <CardHeader className="text-lg font-bold text-indigo-800">{p.heading}</CardHeader>
                <CardContent className="text-xs font-light">
                  {p.description}
                  <ul className="p-2 m-2 hidden group-hover:block list-none">
                    {p.points.map((item, idx) => (
                      <React.Fragment key={idx}>
                        <li className="font-light ml-0.5">{item.first}</li>
                        <li className="font-light ml-0.5">{item.second}</li>
                        <li className="font-light ml-0.5">{item.third}</li>
                        <li className="font-light ml-0.5">{item.fourth}</li>
                      </React.Fragment>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="mt-10 p-12 bg-white  shadow-secondary ">
          <h1 className="text-blue-900 mt-4 text-center font-bold text-2xl">
            {" "}
            🕒IELTS Scoring Brands
          </h1>
          <div className="flex flex-row flex-wrap sm:w-full  justify-center ">
            {brand.map((brand, index) => (
              <div key={index} className="m-2 w-1/4 rounded-sm ">
                <Card className="p-1 m-1 bg-blue-100  hover:bg-indigo-200  rounded">
                  <h1 className="text-center text-indigo-800 font-bold text-2xl">
                    {brand.score}
                  </h1>
                  <h2 className="text-center text-gray-800 font-light">
                    {brand.review}
                  </h2>
                </Card>
              </div>
            ))}
          </div>
        </div>
      
      </div>
    </>
  );
};

export default Ieltspage;
