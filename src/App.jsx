import "./App.css";
import GreetingMessage from "./components/GreetingMessage";

function App() {
  return (
    <>
      <h1>Primary Greeting Message</h1>
      <GreetingMessage text="Hello !" />

      <h1>Secondary Greeting Message</h1>
      <GreetingMessage text="Hello !" />
    </>
  );
}

export default App;
