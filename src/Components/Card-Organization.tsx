import phone from "../assets/phone-green.svg";
import email from "../assets/email-green.svg";

interface iProps {
  nome: string;
  email: string;
  telefone: string;
}

export default function CardOrganization(props: iProps) {
  return (
    <>
      <div className="w-[270px] bg-white rounded-xl shadow-xl">
        <div className="bg-zinc-500 rounded-[50%] w-20 h-20 mx-auto mb-3"></div>
        <h1 className="text-xl text-center font-semibold">{props.nome}</h1>
        <div className="flex flex-col gap-2 p-3">
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <img src={email} alt="ícone de localização" className="w-5 h-5" />
            <span>{props.email}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <img src={phone} alt="ícone de telefone" className="w-4 h-4" />
            <span>{props.telefone}</span>
          </div>
        </div>
      </div>
    </>
  );
}
