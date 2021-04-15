import React from "react";
import Relatives from "../data/Relatives.json";
const Card = () => {
  console.log(Relatives);
  const Display = ({ id, name, profession }) => {
    return (
      <div class="card-body">
        <h2 class="card-title">Id: {id}</h2>
        <h3 class="card-title">Name: {name}</h3>
        <p class="card-text">Profession: {profession}</p>
      </div>
    );
  };
  return (
    <>
      {Relatives.map((user, index) => (
        <div key={index} style={{ display: "inline-flex", margin: "30px" }}>
          <div class="card" style={{ width: "18rem" }}>
            <Display
              id={user.id}
              name={user.name}
              profession={user.profession}
            />
            <hr />
            <ul class="list-group list-group-flush">
              <h1>Relatives:</h1>
              {user.relatives.map((myRelative, relIndex) => (
                <div key={relIndex}>
                  {Relatives.map((value, key) => (
                    <div key={key}>
                      {value.id === myRelative.id ? (
                        <Display
                          id={value.id}
                          name={value.name}
                          profession={value.profession}
                        />
                      ) : null}
                    </div>
                  ))}
                </div>
              ))}
            </ul>
            <hr />
          </div>
          <hr />
        </div>
      ))}
    </>
  );
};

export default Card;
