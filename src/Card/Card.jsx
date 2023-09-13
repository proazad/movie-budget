const Card = ({ actor,handleSelection }) => {
  const { name, age, country, fbUrl, image, role, salary, twitter } = actor;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt={name} className="w-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        {/* <p>Country : {country}</p>
        <p>Age: {age}</p> */}
        <p>Role : {role}</p>
        <p>Salary : {salary}</p>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary" onClick={()=>handleSelection(actor)}>Select</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
