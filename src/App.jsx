import CalcBody from "./Layout/CalcBody";
import Header from "./Layout/Header";
import Screen from "./Layout/Screen";

function App() {
  return (
    <div className="mx-auto w-full max-w-[400px]">
      <Header />
      <Screen />
      <CalcBody />
    </div>
  );
}

export default App;
