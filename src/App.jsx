import { useEffect, useState } from "react";
import Cards from "./Cards/Cards";
import Cart from "./Cart/Cart";
function App() {
  const [actors, setActors] = useState([]);
  const [selectedActors, setSelectedActors] = useState([]);
  const [balanceRemain, setBalanceRemain] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setActors(data));
  }, []);

  const budget = 40000;
  const handleSelection = (actor) => {
    let cost = actor.salary;
    const isEnrolled = selectedActors.find((item) => item.id === actor.id);
    if (isEnrolled) {
      return alert("This Actor is Aleady Selected!");
    } else {
      selectedActors.forEach((item) => {
        cost = cost + item.salary;
      });
      const remaining = budget - cost;
      if (cost > budget) {
        return alert("Insufficient Budget!");
      } else {
        setTotalCost(cost);
        setBalanceRemain(remaining);
      }

      setSelectedActors([...selectedActors, actor]);
    }
  };

  const handleRemoveActor = (actor) =>{
    const newActor = selectedActors.filter(item=>item.id !== actor.id);
    setSelectedActors(newActor);
    let cost = 0;
    newActor.forEach(newItem=>{
      cost+= newItem.salary;
    })
    const remaining = budget - cost;
    setBalanceRemain(remaining);
    setTotalCost(cost)
  }
  return (
    <>
      <div className="container flex mx-auto gap-5 my-10">
        <Cards actors={actors} handleSelection={handleSelection}></Cards>
        <Cart
          selectedActors={selectedActors}
          balanceRemain={balanceRemain}
          totalCost={totalCost}
          handleRemoveActor={handleRemoveActor}
        ></Cart>
      </div>
    </>
  );
}

export default App;
