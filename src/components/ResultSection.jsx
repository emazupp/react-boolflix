import Card from "./Card";

export default function ResultSection({ data, children }) {
  return (
    <>
      <div className="section-container">
        <div className="section-title">{children}</div>
        <div className="card-container">
          {console.log(data)}
          {data && data.map((el) => <Card key={el.id} el={el} />)}
        </div>
      </div>
    </>
  );
}
