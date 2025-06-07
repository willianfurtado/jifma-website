interface iProps {
  imagemModalide: string;
  modalidade: string;
}

export default function Modalitie(props: iProps) {
  return (
    <div className="flex border-green-700 border-2 items-center justify-center gap-2 p-1 rounded-lg w-[200px]">
      <img
        src={props.imagemModalide}
        alt="modalidade"
        className="w-9 h-9 object-contain mb-2"
      />
      <span className="text-center text-black font-semibold uppercase">{props.modalidade}</span>
    </div>
  );
}
