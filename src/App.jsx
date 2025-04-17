/* Chef Claude
import Header from "./components/Header";
import Main from "./components/Main";

export default function App() {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}*/

// forms in React
import React from "react";
import ReactDOM from "react-dom/client";

export default function App() {
  function signUp(formData) {
    const email = formData.get("email");
    console.log(email);
  }

  return (
    <section>
      <h1> Signup form</h1>
      <form action={signUp}>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="joe.schmoe.com"
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input id="password" type="password" name="password" />
        <br />
        <button>Submit</button>
      </form>
    </section>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);

// Complex state - objects
/*
import React from "react"; // Import React
import avatar from "/src/images/user.png";
import starFilled from "/src/images/star-filled.png";
import starEmpty from "/src/images/star-empty.png";

export default function App() {
  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (555) 555-5555",
    email: "itsmyrealname@example.com",
    isFavorite: true,
  });

  let starIcon = contact.isFavorite ? starFilled : starEmpty;
  function toggleFavorite() {
    setContact((prevContact) => {
      return {
        /* 
        firstName: "John",
    lastName: "Doe",
    phone: "+1 (555) 555-5555",
    email: "itsmyrealname@example.com",
    isFavorite: true,
        */

/*...prevContact, // Spread operator to copy the previous state
        isFavorite: !prevContact.isFavorite,
      };
    });
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
          <button
            onClick={toggleFavorite}
            aria-pressed={contact.isFavorite}
            aria-label={
              contact.isFavorite ? "Remove from favorites" : "Add to favorites"
            }
            className="favorite-button"
          >
            <img
              src={starIcon}
              alt={contact.isFavorite ? "filled star icon" : "empty star icon"}
              className="favorite"
            />
          </button>
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
