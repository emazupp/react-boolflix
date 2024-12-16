function App() {
  console.log(import.meta.env);
  return (
    <>
      <p>api key: {import.meta.env.VITE_TEST_VARIABLE}</p>
    </>
  );
}

export default App;
