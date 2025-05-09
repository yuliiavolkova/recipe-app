//Chef Claude
/*import Header from "./components/Header";
import Main from "./components/Main";

export default function App() {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}*/

//Sound pads challenge

import React from "react";
import padsData from "./components/pads.js";
import Pad from "./components/Pad.jsx";

export default function App(/*{ darkMode }*/) {
  const [pads, setPads] = React.useState(padsData);

  function toggle(id) {
    setPads((prevPads) =>
      prevPads.map((item) => {
        return item.id === id ? { ...item, on: !item.on } : item; // Spread operator to copy the previous state
      })
    );
  }

  /*const styles = {
    backgroundColor: darkMode ? "#222222" : "#cccccc",
  };*/

  const buttonElements = pads.map((pad) => (
    <Pad
      toggle={toggle}
      id={pad.id}
      key={pad.id}
      color={pad.color}
      on={pad.on}
    /> /*style={styles}*/
  ));

  return (
    <main>
      <div className="pad-container">{buttonElements}</div>
    </main>
  );
}

// forms in React
/*
import React from "react";
import ReactDOM from "react-dom/client";

export default function App() {
  function signUp(formData) {
    const data = Object.fromEntries(formData.entries());
    //console.log(data);
    // const email = formData.get("email");
    // const password = formData.get("password");
    // const employmentStatus = formData.get("employmentStatus");
    // //console.log(email);
    // //console.log(employmentStatus);
    const dietaryRestrictions = formData.getAll("dietaryRestrictions");
    //console.log(dietaryRestrictions);
    const allData = {
      ...data,
      dietaryRestrictions,
    };
    console.log(allData);
    // const favColor = formData.get("favColor");
    // console.log(favColor);
  }

  return (
    <section>
      <h1> Signup form</h1>
      <form action={signUp}>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          defaultValue="joe@schmoe.com"
          type="email"
          name="email"
          placeholder="joe.schmoe.com"
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          defaultValue="password123"
          type="password"
          name="password"
        />
        <br />

        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          defaultValue="This is a description"
        ></textarea>
        <fieldset>
          <legend>Employment Status</legend>
          <label>
            <input type="radio" name="employmentStatus" value="unemployed" />
            Unemployed
          </label>
          <label>
            <input type="radio" name="employmentStatus" value="part-time" />
            Part-time
          </label>
          <label>
            <input
              type="radio"
              name="employmentStatus"
              defaultChecked={true}
              value="full-time"
            />
            Full-time
          </label>
        </fieldset>

        <fieldset>
          <legend>Dietary restrictions</legend>
          <label>
            <input type="checkbox" name="dietaryRestrictions" value="kosher" />
            Kosher
          </label>
          <label>
            <input
              type="checkbox"
              name="dietaryRestrictions"
              value="vegetarian"
            />
            Vegetarian
          </label>
          <label>
            <input
              type="checkbox"
              name="dietaryRestrictions"
              value="gluten-free"
            />
            Gluten-free
          </label>
        </fieldset>

        <label htmlFor="color">What is your favorite color?</label>
        <select id="favColor" name="favColor" defaultValue="" required>
          <option value="" disabled>
            -- Select a color --
          </option>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="yellow">Yellow</option>
        </select>

        <button>Submit</button>
      </form>
    </section>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);*/

// Complex state - objects
/*

import React from "react"; // Import React
import avatar from "/src/images/user.png";
import Star from "/src/components/Star.jsx";

export default function App() {
  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (555) 555-5555",
    email: "itsmyrealname@example.com",
    isFavorite: true,
  });

  function toggleFavorite() {
    setContact((prevContact) => ({
      /* Приклад заміна об'єкта
      return {
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (555) 555-5555",
        email: "itsmyrealname@example.com",
        isFavorite: true,*/

/* ...prevContact, // Spread operator to copy the previous state
      isFavorite: !prevContact.isFavorite,
    }));
  }

  return (
    <main>
      <article className="card">
        <img
          src={avatar}
          className="avatar"
          alt="User profile picture of John Doe"
        />
        <div className="info">
          <Star isFilled={contact.isFavorite} handleClick={toggleFavorite} />
          <h2 className="name">
            {contact.firstName} {contact.lastName}
          </h2>
          <p className="contact">{contact.phone}</p>
          <p className="contact">{contact.email}</p>
        </div>
      </article>
    </main>
  );
}*/

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

//Jokes
/*
import Joke from "./components/Joke";
import jokesData from "./components/jokesData";

export default function App() {
  const jokeElements = jokesData.map((joke) => {
    return <Joke key={joke.id} setup={joke.setup} punchline={joke.punchline} />;
  });
  return <div>{jokeElements}</div>;
}*/
