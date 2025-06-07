import { Link } from "react-router-dom";

import logo from "../assets/logo-if.png";
import facebook from "../assets/facebook-icon.png";
import instagram from "../assets/icon-instagram.png";
import whatsApp from "../assets/icon-whatsapp.png";

export default function Header() {
  return (
    <header className="w-full py-4">
      <div className="max-w-[92%] mx-auto px-4">
        <div className="flex items-center justify-between ">
          <img src={logo} className="w-24 h-auto" alt="Logo IF" />
          <h1 className="text-3xl font-bold">JIFMA 2025 - CAXIAS</h1>
          <div className="flex items-center justify-center gap-4 border border-black rounded-2xl p-2 w-40">
            <a href=""><img src={facebook} className="w-7 h-7" alt="Facebook logo" /></a>
            <a href=""><img src={instagram} className="w-7 h-7" alt="Instagram logo" /></a>
            <a href=""><img src={whatsApp} className="w-7 h-7" alt="WhatsApp logo" /></a>
          </div>
        </div>
        <hr className="border-t border-black my-6 mx-auto" />
        <div className="px-5 h-10 border rounded-2xl flex items-center ">
          <nav className="flex gap-33 justify-center">
            <div className="flex items-center gap-2">
              <div className="w-[20px] h-[20px] bg-red-600 rounded-[50%]"></div>
              <Link to="/">Início</Link>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-[20px] h-[20px] bg-lime-600 rounded-[50%]"></div>
              <Link to="/partidas">Partidas</Link>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-[20px] h-[20px] bg-red-600 rounded-[50%]"></div>
              <Link to="/quadro-de-medalhas">Quadro de medalhas</Link>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-[20px] h-[20px] bg-lime-600 rounded-[50%]"></div>
              <Link to="/modalidades">Modalidades</Link>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-[20px] h-[20px] bg-red-600 rounded-[50%]"></div>
              <Link to="/conheca-caxias">Conheça Caxias</Link>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-[20px] h-[20px] bg-lime-600 rounded-[50%]"></div>
              <Link to="/organizacao">Organização</Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
