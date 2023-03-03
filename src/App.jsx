import CatCard from "./components/CatCard";
import Header from "./components/Header";
import catsData from "./data/cats";

function App() {
  // text is a prop passed from parent (App) to child (Header)
  return (
    <>
      <Header text={"Hello Cat!"} />
      <CatCard cat={catsData[0]} />
    </>
  );
}

export default App;
