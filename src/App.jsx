// context
import { BoolflixProvider } from "./contexts/BoolflixContext";
// components
import Header from "./components/Header";

function App() {
  console.log(import.meta.env);
  return (
    <>
      <BoolflixProvider>
        <Header />
      </BoolflixProvider>
    </>
  );
}

export default App;
