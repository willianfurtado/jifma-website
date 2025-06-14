interface iProps {
  imagemModalide: string;
  modalidade: string;
}

export default function Modalitie(props: iProps) {
  return (
    <div className="flex border-green-700 border-2 items-center justify-center gap-2 p-1 rounded-lg w-full text-lg shadow-md transition-transform hover:scale-[1.02] duration-300 ease-in-out">
      <img
        src={props.imagemModalide}
        alt="modalidade"
        className="w-9 h-9 object-contain mb-2"
      />
      <span className="text-center text-black font-semibold uppercase">{props.modalidade}</span>
    </div>
  );
}
