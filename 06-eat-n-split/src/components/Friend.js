import React from "react";
import Button from "./Button";

const Friend = ({ f }) => {
  return (
    <div>
      <li>
        <img src={f.image} alt={f.name} />
        <h3>{f.name}</h3>
        {f.balance < 0 && (
          <p className="red">
            You owe {f.name} {Math.abs(f.balance)}$
          </p>
        )}
        {f.balance > 0 && (
          <p className="green">
            {f.name} owes you {f.balance}$
          </p>
        )}
        {f.balance === 0 && <p>You and {f.name} are even</p>}
      </li>
      <Button>Select</Button>
    </div>
  );
};

export default Friend;
