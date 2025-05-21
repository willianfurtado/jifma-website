import Header from "./Components/Header";
import News from "./Components/News";

export default function App() {
  return (
    <>
      <Header />
      <main className="max-w-[90%] mx-auto">
        <h1 className="text-2xl font-bold text-white my-4">Notícias</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20">
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
    </>
  );
}
