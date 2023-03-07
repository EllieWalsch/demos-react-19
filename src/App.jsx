import CatCard from "./components/CatCard";
import Header from "./components/Header";
import catsData from "./data/cats";

function App() {
  // text is a prop passed from parent (App) to child (Header)
  // <> is a fragment tag, use that instead of divs
  return (
    <>
      <Header text={"Hello Cat!"} />

      {catsData.map((cat) => {
        return <CatCard cat={cat} key={cat.id} />;
      })}
    </>
  );
}

export default App;
