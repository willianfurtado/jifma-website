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
          <h1 className="text-2xl font-bold">JIFMA 2025</h1>
          <div className="flex items-center justify-center gap-4 border rounded-2xl p-2 w-40">
            <img src={facebook} className="w-6 h-6" alt="Facebook logo" />
            <img src={instagram} className="w-6 h-6" alt="Instagram logo" />
            <img src={whatsApp} className="w-6 h-6" alt="WhatsApp logo" />
          </div>
        </div>
        <hr className="border-t border-gray-300 my-6 mx-auto" />
        <div className="px-5 h-10 border rounded-2xl flex items-center ">
          <nav className="flex gap-33 justify-center">
            <div className="flex items-center gap-1">
              <div className="w-[20px] h-[20px] bg-red-600 rounded-[50%]"></div>
              <a href="" target="_blank">
                Início
              </a>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-[20px] h-[20px] bg-lime-600 rounded-[50%]"></div>
              <a href="" target="_blank">
                Partidas
              </a>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-[20px] h-[20px] bg-red-600 rounded-[50%]"></div>
              <a href="" target="_blank">
                Quadro de medalhas
              </a>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-[20px] h-[20px] bg-lime-600 rounded-[50%]"></div>
              <a href="" target="_blank">
                Modalidades
              </a>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-[20px] h-[20px] bg-red-600 rounded-[50%]"></div>
              <a href="" target="_blank">
                Conheca Caxias
              </a>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-[20px] h-[20px] bg-lime-600 rounded-[50%]"></div>
              <a href="" target="_blank">
                Organização
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
