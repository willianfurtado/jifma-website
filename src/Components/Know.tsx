import { Link } from "react-router-dom";

interface iProps {
  imagem: string;
  titulo: string;
  icone: string;
  rota: string;
}

export default function Know(props: iProps) {
  return (
    <>
      <div className="flex flex-col p-2 items-center justify-center gap-3 w-[200px] h-[170px] border-2 rounded-2xl border-green-800">
        <img src={props.imagem} alt="icone" className="w-16 h-16" />
        <span className="font-bold text-2xl">{props.titulo}</span>
         <Link to={props.rota} className="font-bold text-gray-500 flex gap-2 items-center">
        <img src={props.icone} alt="icone" className="w-[30px] h-[30px]" />
        Ver descrição
      </Link>
      </div>
    </>
  );
}
