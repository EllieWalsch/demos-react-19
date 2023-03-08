import CatCard from "./components/CatCard";
import GroceryLi from "./components/GroceryLi";
import Header from "./components/Header";
import catsData from "./data/cats";
import groceriesData from "./data/groceries";
import UserCard from "./components/UserCard";
import userData from "./data/users";
import NavBar from "./components/NavBar";
import Counter from "./components/Counter";
import React from "react";
import Cats from "./routes/cats";

function App() {
  // starts at home route ("/")
  const [currentPath, setCurrentPath] = React.useState("/");

  // shuts down default behavior
  // identifies event target
  // sets the current path to the text of the current target
  const handleNavClick = (event) => {
    event.preventDefault();
    setCurrentPath("/" + event.target.textContent.toLowercase());
  };

  // takes the current path and returns the cats html from routes
  switch (currentPath) {
    case "/cats":
      return <Cats />;
  }

  // text is a prop passed from parent (App) to child (Header)
  // <> is a fragment tag, use that instead of divs
  return (
    <>
      <NavBar handleClick={handleNavClick} />

      <Header text={"Hello Cat!"} />

      <ul>
        {groceriesData.map((item) => {
          return <GroceryLi item={item} key={item.id} />;
        })}
      </ul>

      {userData.map((user) => {
        return <UserCard user={user} key={user.email} />;
      })}

      <Counter />
    </>
  );
}

export default App;
