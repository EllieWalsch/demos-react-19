import Header from "./components/Header";
import CatCard from "./components/CatCard";
import catsData from "./data/cats";

function App() {
  // text is a prop passed from parent (App) to child (Header)
  return <CatCard cat={catsData[0]} />;
}

export default App;
