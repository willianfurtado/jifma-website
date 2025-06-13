import phone from "../assets/phone.svg";
import place from "../assets/place-green.svg";
import Routes from "./Button-Routes";

interface iProps {
  imgLocal: string;
  nomeLocal: string;
  enderecoLocal: string;
  telefone: string;
}

export default function Card(props: iProps) {
  return (
    <>
      <div className="w-full bg-white rounded-xl shadow-xl">
        <img 
          src={props.imgLocal} 
          alt="imagem do local" 
          className="w-full object-cover rounded-t-2xl " 
        />

        {/* Funcionamento */}
        <div className="flex flex-col gap-2 p-3">
          <h1 className="text-xl font-semibold">{props.nomeLocal}</h1>
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <img src={place} alt="ícone de localização" className="w-5 h-5" />
            <span>{props.enderecoLocal}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <img src={phone} alt="ícone de telefone" className="w-5 h-4" />
            <span>{props.telefone}</span>
          </div>
        </div>
        <div className="flex justify-center pb-4">
          <Routes />
        </div>
      </div>
    </>
  );
}
