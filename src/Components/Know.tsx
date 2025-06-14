import { Link } from "react-router-dom";

interface iProps {
  imagem: string;
  titulo: string;
  icone: string;
  rota: string;
}

export default function Know(props: iProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 w-full h-[170px] border-2 border-green-800 rounded-2xl shadow-md p-4 text-center transition-transform hover:scale-[1.02] duration-300 ease-in-out">
      <img src={props.imagem} alt="icone" className="w-16 h-16" />
      
      <span className="font-bold text-2xl text-green-800">{props.titulo}</span>
      
      <Link
        to={props.rota}
        className="flex items-center gap-2 font-medium text-gray-600 hover:text-green-600 transition-all duration-300"
      >
        <img
          src={props.icone}
          alt="icone"
          className="w-[24px] h-[24px] transition-transform duration-300 group-hover:translate-x-1"
        />
        <span className="group-hover:underline">Ver descrição</span>
      </Link>
    </div>
  );
}
