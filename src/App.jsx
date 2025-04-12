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

export default function App() {
  const isGoingOut = true;

  /*if (isGoingOut) {
    answer = "Yes, let's go out!";
  } else {
    answer = "No, let's stay in.";
  }*/
  return (
    <main>
      <h1 className="title">Do I feel like going out tonight?</h1>
      <button className="value">{isGoingOut ? "Yes" : "No"}</button>
    </main>
  );
}
