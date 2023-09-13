const Cart = ({ selectedActors, balanceRemain, totalCost,handleRemoveActor }) => {
  return (
    <div className="w-[350px]">
      <div className="bg-teal-400 p-4 rounded-md text-black mb-5">
        <h2 className="text-xl"><span className="font-semibold">Budget:</span> 40000</h2>
        <h3 className="text-xl">
            <span className="font-semibold">Remaining Budget:</span> {balanceRemain}</h3>
        <h4 className="text-xl"><span className="font-semibold">Total Cost:</span> {totalCost}</h4>
      </div>
      <div className="bg-teal-400 p-4 rounded-md text-black mb-5">
        <h3 className="text-3xl mb-4">Selected Actors : {selectedActors.length}</h3>
        <ol>
          {selectedActors.map((actor) => (
            <li key={actor.id} className="flex justify-between gap-4 mb-4">
              <div className="flex gap-4">
              # <img src={actor.image} className="w-10"></img>
              {actor.name}
              </div>
              <button className="btn btn-sm btn-secondary" onClick={()=>handleRemoveActor(actor)}>Remove</button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Cart;
