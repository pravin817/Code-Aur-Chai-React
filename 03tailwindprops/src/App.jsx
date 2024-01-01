import "./App.css";
import Card from "./components/Card";

function App() {
  let myObj = {
    username: "Pravin",
    age: 21,
  };
  return (
    <>
      <h1 className="  bg-green-400 text-black  p-4 rounded-xl mb-5">
        TailwindCSS
      </h1>
      <Card username="CodeAurChai" myArr={myObj} btnText="Click Me" />
      <Card username="HiteshSir" myArr={myObj} />
    </>
  );
}

export default App;
