import React from "react";

export default function Joke(props) {
  const [isShown, setIsShown] = React.useState(false);

  function toggleShown() {
    setIsShown((prevShown) => !prevShown);
  }

  console.log(isShown);
  return (
    <div>
      {props.setup && <h3>{props.setup}</h3>}
      {isShown ? <p>{props.punchline}</p> : null}
      <button onClick={toggleShown}>
        {isShown ? "Hide" : "Show"} punchline
      </button>

      <hr />
    </div>
  );
}

/*
export default function App() {
  const [messages, setMessages] = React.useState[("a", "b")];

  function determineText() {
    if (messages.length === 0) {
      return "No messages";
    } else if (messages.length === 1) {
      return "1 message";
    } else {
      return `${messages.length} messages`;
    }
  }

  return (
    <div>
      <h1>{determineText}</h1>
    </div>
  );
}*/
