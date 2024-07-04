import React from "react";
import Button from "./Button";

const Friend = ({ f, onSelection, seletedFriend }) => {
  const isSelected = seletedFriend?.id === f.id;
  return (
    <li className={isSelected ? "selected" : ""}>
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
      <Button onClick={() => onSelection(f)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
};

export default Friend;
