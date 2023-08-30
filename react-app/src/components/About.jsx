import {ChevronDownIcon} from "@heroicons/react/24/solid";
import Flower from "../assets/Flower.png";
import Leaves from "../assets/Leaves.png";

function About({scrollToSection}) {

  const titleText = "text-56 text-black-500 font-gothamGothic leading-74 font-700";
  const text = "text-15 text-black-500 leading-27 font-325";
  const textButton = "text-11 text-black-500 leading-23 font-bold";

  return (
    <div className="relative">
      <div className="bg-white w-6/12 mt-20 py-24 px-60 relative">
        <div>
          <p className={`${titleText} tracking-[2px] whitespace-nowrap`}>ZIELISTKA GREEN ORANGE-</p>
          <div className="flex items-center gap-6 cursor-pointer">
            <p className={`${titleText} tracking-[2px] whitespace-nowrap`}>PIELĘGNACJA</p>
            <img alt="logo" src={Leaves} className="w-12 h-auto"/>
          </div>
        </div>
        <div>
          <p className={`${text} pt-8`}>
            Zieliska Green Orange to wyjtkowa roślina, której kolorowe ubarwienie ożywi pomieszczenie, w którym
            się znajduję. Kolejną zaletą zielistki jest to, że skutecznie oczyszcza powietrze ze szkodliwych substancji,
            dzięki czemu lepiej się czujemy w jej towarzystwie. Potrafi oczyszczać powietrze z substancji takich
            jak formaldehyd, ksylen, tlenek węgla, aceton, amoniak i metale ciężkie.
          </p>
        </div>
        <div className="flex items-center gap-3 pt-10 cursor-pointer" onClick={scrollToSection}>
          <div className="w-9 h-9 flex justify-center items-center bg-blue-100">
            <ChevronDownIcon className="h-8 w-3 text-white"/>
          </div>
          <p className={`${textButton} tracking-[1px]`}>JAK TO ZROBIĆ</p>
        </div>
      </div>
      <div >
        <img alt="flower" src={Flower} className="absolute top-12 right-20 z-10 w-3/6 h-auto"/>
      </div>
    </div>
  );
}

export default About;