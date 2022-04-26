import Nav from "./components/Nav/Nav";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div
      className="App w-full font-karla flex flex-col items-center justify-start
        overflow-x-hidden"
    >
      <Nav />
      <main className="w-full">
        <Hero />
        <Services />
        <Banner />
        <Footer />
      </main>
    </div>
  );
};

export default App;
