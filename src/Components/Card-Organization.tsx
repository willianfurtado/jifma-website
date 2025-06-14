import phone from "../assets/phone-green.svg";
import email from "../assets/email-green.svg";
import whatsApp from "../assets/whats.svg";

interface iProps {
  nome: string;
  email: string;
  telefone: string;
}

export default function CardOrganization(props: iProps) {
  return (
    <div className="w-full bg-white rounded-xl shadow-xl p-4 relative transition-transform hover:scale-[1.02] duration-300 ease-in-out">
      
      {/* Botão WhatsApp no canto superior direito */}
      <a
        href={`https://wa.me/55${props.telefone.replace(/\D/g, "")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-3 right-3"
      >
        <img
          src={whatsApp}
          alt="WhatsApp"
          className="w-10 h-10"
        />
      </a>

      {/* Imagem de perfil */}
      <div className="bg-zinc-300 rounded-full w-20 h-20 mx-auto mb-3"></div>

      {/* Nome */}
      <h1 className="text-xl text-center font-semibold">{props.nome}</h1>

      {/* Contato */}
      <div className="flex flex-col gap-3 p-3">
        <div className="flex items-center gap-2 text-sm text-gray-700">
          <img src={email} alt="ícone de email" className="w-5 h-5" />
          <span>{props.email}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-700">
          <img src={phone} alt="ícone de telefone" className="w-4 h-4" />
          <span>{props.telefone}</span>
        </div>
      </div>
    </div>
  );
}
