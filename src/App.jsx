import CatCard from "./components/CatCard";
import GroceryLi from "./components/GroceryLi";
import Header from "./components/Header";
import catsData from "./data/cats";
import groceriesData from "./data/groceries";
import UserCard from "./components/UserCard";
import userData from "./data/users";

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
          return <GroceryLi item={item} key={item.id} />;
        })}
      </ul>

      {userData.map((user) => {
        return <UserCard user={user} key={user.id.value} />;
      })}
    </>
  );
}

export default App;
