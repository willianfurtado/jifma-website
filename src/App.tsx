import Header from "./Components/Header";
import News from "./Components/News";
import PageTransition from "./Components/PageTransition";

export default function App() {
  return (
    <>
      <Header />
      <PageTransition>
        <main className="max-w-[90%] mx-auto">
          <h1 className="text-2xl font-bold text-black my-4">Notícias</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <News />
            <News />
            <News />
            <News />
            <News />
            <News />
            <News />
            <News />
          </div>
        </main>
      </PageTransition>
    </>
  );
}
