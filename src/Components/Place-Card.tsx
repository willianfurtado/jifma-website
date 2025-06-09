import clock from "../assets/relogio.svg";
import place from "../assets/place.svg";
import Routes from "./Button-Routes";

interface iProps {
  imgLocal: string;
  nomeLocal: string;
  funcionamento: string;
  endereco: string;
}

export default function Place(props: iProps) {
  return (
    <>
      <div className="h-[350px] w-[330px] border-2 border-green-800 rounded-[26px]">
        <img
          src={props.imgLocal}
          alt="Estabelecimento"
          className="mx-auto mt-3 mb-1"
        />
        <h1 className="text-center text-2xl font-semibold">{props.nomeLocal}</h1>
        <hr className="w-[90%] border-t border-green-800 border-1 my-2 mx-auto" />

        {/* Funcionamento */}
        <div className="flex flex-col p-4 gap-4 mb-2 text-lg">
          <div className="flex gap-2 ">
            <img src={clock} alt="ícone de relógio" />
            <span>Funcionamento: {props.funcionamento}</span>
          </div>
          {/* Endereço */}
          <div className="flex gap-2">
            <img src={place} alt="ícone de local" className="w-6 h-7" />
            <span>{props.endereco}</span>
          </div>
        </div>
        <Routes />
      </div>
    </>
  );
}
