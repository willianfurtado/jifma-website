import { Link } from "react-router-dom";

import logo from "../assets/logo-if.png";
import facebook from "../assets/facebook-icon.png";
import instagram from "../assets/icon-instagram.png";
import whatsApp from "../assets/icon-whatsapp.png";

export default function Header() {
  return (
    <header className="lg:w-full py-4">
      <div className="max-w-[92%] mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 text-center lg:text-left">
          <img src={logo} className="w-24 h-auto" alt="Logo IF" />
          <h1 className="text-2xl lg:text-3xl font-bold">
            JIFMA 2025 - CAXIAS
          </h1>
          <div className="flex items-center justify-center gap-4 border border-black rounded-2xl p-2 w-40 mx-auto lg:mx-0">
            <a href=""><img src={facebook} className="w-7 h-7" alt="Facebook logo" /></a>
            <a href=""><img src={instagram} className="w-7 h-7" alt="Instagram logo" /></a>
            <a href=""><img src={whatsApp} className="w-7 h-7" alt="WhatsApp logo" /></a>
          </div>
        </div>

        <hr className="border-t border-black my-6 mx-auto" />

        <div className="px-5 py-3 border rounded-2xl flex flex-col lg:flex-row items-center gap-4">
          <nav className="flex flex-wrap justify-center lg:justify-between gap-6 w-full">
            {[
              { to: "/", label: "Início", color: "bg-red-600" },
              { to: "/partidas", label: "Partidas", color: "bg-lime-600" },
              { to: "/quadro-de-medalhas", label: "Quadro de medalhas", color: "bg-red-600" },
              { to: "/modalidades", label: "Modalidades", color: "bg-lime-600" },
              { to: "/conheca-caxias", label: "Conheça Caxias", color: "bg-red-600" },
              { to: "/organizacao", label: "Organização", color: "bg-lime-600" },
            ].map(({ to, label, color }) => (
              <div key={to} className="flex items-center gap-2">
                <div className={`w-[20px] h-[20px] ${color} rounded-full`} />
                <Link to={to}>{label}</Link>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

