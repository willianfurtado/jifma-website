import CardOrganization from "../../Components/Card-Organization";
import Header from "../../Components/Header";

export default function Organization() {
  return(
    <>
      <Header />
      <main className="w-[90%] mx-auto">
        <h1 className="text-2xl font-bold text-black mt-4 mb-6">Organização</h1>
        <CardOrganization 
          nome="Luis Morais"
          email="luismorais@ifma.acad.edu.br"
          telefone="(99) 99192-0203"
        />
      </main>
    </>
  )
}