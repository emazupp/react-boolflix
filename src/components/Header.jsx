import Filters from "./Filters";

export default function Header() {
  return (
    <>
      <header className="container">
        <div>
          <span className="logo">BOOLFLIX</span>
        </div>
        <Filters />
      </header>
    </>
  );
}
