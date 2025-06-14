import CardOrganization from "../../Components/Card-Organization";
import Header from "../../Components/Header";
import PageTransition from "../../Components/PageTransition";

export default function Organization() {
  const organizers = [
    {
      nome: "Luis Morais",
      email: "luismorais@ifma.acad.edu.br",
      telefone: "(99) 99192-0203",
    },
    {
      nome: "Luis Morais",
      email: "luismorais@ifma.acad.edu.br",
      telefone: "(99) 99192-0203",
    },
    {
      nome: "Luis Morais",
      email: "luismorais@ifma.acad.edu.br",
      telefone: "(99) 99192-0203",
    },
    {
      nome: "Luis Morais",
      email: "luismorais@ifma.acad.edu.br",
      telefone: "(99) 99192-0203",
    },
  ];

  return (
    <>
      <Header />
      <PageTransition>
        <main className="w-[90%] mx-auto">
          <h1 className="text-2xl font-bold text-black mt-4 mb-6">Organização</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {organizers.map((organizer, index) => (
              <CardOrganization key={index} {...organizer} />
            ))}
          </div>
        </main>
      </PageTransition>
    </>
  );
}
