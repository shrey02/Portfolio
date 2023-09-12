import React from "react";
interface highlightedTextData{
  normalData?:string,
  highlightedPart?:string,
  endingData?:string,
}

interface data{
  companyName:string,
  bulletPointsArray:highlightedTextData[],
}

function Card(props:data){

  return (
    <>
        <div className="w-[19rem] border-2 border-pink-600 rounded-2xl m-auto text-center p-2 py-3 mt-8">
          <h1
            className="bg-gradient-to-r
       from-yellow-300 via-amber-300 to-white inline-block 
         text-transparent bg-clip-text font-bold font-roboto text-center text-3xl">
            {" "}
            {props.companyName}{" "}
          </h1>
          <p className="text-slate-100 text-left pl-3 font-roboto">
            {props.bulletPointsArray.map((point, index) => (
              <React.Fragment key={index}>
                <br />
                {point?.normalData}{" "}
                <span className="text-indigo-300">
                  {point?.highlightedPart}
                </span>
                {point?.endingData}
                <br />
              </React.Fragment>
            ))}
          </p>
        </div>
    </>
  );
}

export default Card;
