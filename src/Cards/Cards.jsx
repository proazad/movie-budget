import Card from "../Card/Card";
const Cards = ({ actors,handleSelection }) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 flex-1">
      {actors.map((actor) => (
        <Card key={actor.id} actor={actor} handleSelection={handleSelection}></Card>
      ))}
    </div>
  );
};

export default Cards;
