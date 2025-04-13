import Header from "./components/Header";
import Main from "./components/Main";

export default function App() {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}
/*
import React from "react"; // Import React
export default function App() {
  const [isGoingOut, setIsGoingOut] = React.useState(false);

  function changeMind() {
    setIsGoingOut((prev) => !prev);
  }
  return (
    <main>
      <h1 className="title">Do I feel like going out tonight?</h1>
      <button
        onClick={changeMind}
        className="value"
        aria-label={`Current answer is ${
          isGoingOut ? "yes" : "no"
        }. Click to change it.`}
      >
        {isGoingOut ? "Yes" : "No"}
      </button>
    </main>
  );
}*/
//const isGoingOut = true;
/*if (isGoingOut) {
    answer = "Yes, let's go out!";
  } else {
    answer = "No, let's stay in.";
  }*/

/*import React from "react";
export default function App() {
  const [myFavoriteThings, setMyFavoriteThings] = React.useState([]);
  const allFavoriteThings = ["apple", "banana", "orange", "grape", "kiwi"];

  const thingsElements = myFavoriteThings.map((thing) => (
    <p key={thing}>{thing}</p>
  ));

  function addFavoriteThings() {
    setMyFavoriteThings((prevFavThings) => [
      ...prevFavThings,
      allFavoriteThings[prevFavThings.length],
    ]);
  }

  return (
    <main>
      <button onClick={addFavoriteThings}>Add things</button>
      <section aria-live="polite">{thingsElements}</section>
    </main>
  );
}*/
