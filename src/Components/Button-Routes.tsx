import locale from '../assets/locale.svg'

export default function Routes() {
  return(
    <div className='flex border rounded-[20px] mx-auto border-green-800 justify-center gap-2 w-[250px]'>
      <img src={locale} alt="icone de local" />
      <span className='uppercase text-xl font-bold'>Ver rotas</span>
    </div>
  )
}