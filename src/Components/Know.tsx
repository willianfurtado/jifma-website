interface iProps {
  imagem: string;
  titulo: string;
  icone: string;
  // tituloBotao: string;
}

export default function Know(props: iProps) {
  return (
    <>
      <div className="flex flex-col p-2 items-center justify-center gap-3 w-[230px] h-[180px] border rounded-2xl border-green-400">
        <img src={props.imagem} alt="icone" className="w-16 h-16" />
        <span className="font-bold text-2xl">{props.titulo}</span>
        <div className="flex gap-2">
          <img src={props.icone} alt="icone" className="w-[30px] h-[30px]" />
          <button className="font-bold">Ver descrição</button>
        </div>
      </div>
    </>
  );
}
