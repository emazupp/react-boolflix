// context
import { BoolflixProvider } from "./contexts/BoolflixContext";
// components
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <>
      <BoolflixProvider>
        <div className="wrapper">
          <Header />
          <Main />
        </div>
      </BoolflixProvider>
    </>
  );
}

export default App;
