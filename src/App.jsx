import CatCard from "./components/CatCard";
import Header from "./components/Header";
import catsData from "./data/cats";
import groceriesData from "./data/groceries";

function App() {
  // text is a prop passed from parent (App) to child (Header)
  // <> is a fragment tag, use that instead of divs
  return (
    <>
      <Header text={"Hello Cat!"} />

      {catsData.map((cat) => {
        return <CatCard cat={cat} key={cat.id} />;
      })}

      <ul>
        {groceriesData.map((item) => {
          return (
            <li key={item.name}>
              <label htmlFor={item.id}>{item.name}</label>

              <input
                type="checkbox"
                id={item.id}
                defaultChecked={item.purchased}
              />
            </li>
          );
        })}
      </ul>

      {/* NEXT TO EACH ONE, RENDER A CHECKBOX - conditional rendering */}
    </>
  );
}

export default App;
