import {ChevronDownIcon} from "@heroicons/react/24/solid";
import Logo from "../assets/Logo.png";

function Navbar() {

  const navText = "text-14 text-black-500 font-gothamMedium leading-27 font-400";
  const logoText = "text-2xl font-gothamBlack";

  return (
    <nav className="flex items-center justify-between mt-10 mx-10">
      <div className="flex items-center gap-2 cursor-pointer">
        <img alt="logo" src={Logo} className="w-8 h-auto"/>
        <p className={logoText}>Accolade</p>
      </div>
      <div className={`${navText} flex justify-between gap-10`}>
        <div className="flex gap-1 cursor-pointer">
          <p>O NÁS</p>
          <ChevronDownIcon className="h-8 w-3"/>
        </div>
        <div className="flex gap-1 cursor-pointer">
          <p>INVESTUJTE S NÁMI</p>
          <ChevronDownIcon className="h-8 w-3"/>
        </div>
        <div className="cursor-pointer">
          <p>NAŠE PARKY</p>
        </div>
        <div className="cursor-pointer">
          <p>PŘIPRAVOVANÉ LOKALITY</p>
        </div>
        <div className="cursor-pointer">
          <p>AKTUALITY</p>
        </div>
        <div className="cursor-pointer">
          <p>KONTAKTY</p>
        </div>
        <div className="flex gap-1 cursor-pointer">
          <p>CZ</p>
          <ChevronDownIcon className="h-8 w-3"/>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;