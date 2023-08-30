import {PhotoIcon} from "@heroicons/react/24/solid";
import Flower2 from "../assets/Flower2.jpg";
import React, {useState} from 'react';

function Card({number, title, text, popup}) {

  const [isHovered, setIsHovered] = useState(false);

  const titleText = "text-56 text-black-500 font-gothamGothic leading-74 font-700 tracking-[2px]";
  const regularText = "text-15 text-black-500 font-gothamBook leading-24 font-325";
  const numberText = "text-8xl text-gray-100 font-gothamGothic leading-74 font-325";

  return (
    <div className="bg-white pt-10 px-16 pb-28">
      <div className="flex gap-6 items-center pb-10">
        <p className={numberText}>{number}</p>
        <p className={titleText}>{title}</p>
      </div>
      <div>
        <p className={regularText}>{text}</p>
      </div>
      {popup &&
        <div className="pt-8">
          <div
            className="h-12 w-12 cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <PhotoIcon className="h-12 w-12 cursor-pointer group"/>
          </div>
          {isHovered && (
            <div className="absolute m-8 z-10">
              <img src={Flower2} alt="Hovered Image" className="h-40 w-40"/>
            </div>
          )}
        </div>
      }
    </div>
  );
}

export default Card;