import React from "react";

const Friend = ({ f }) => {
  return (
    <div>
      <li>
        <img src={f.image} alt={f.name} />
        <h3>{f.name}</h3>
      </li>
    </div>
  );
};

export default Friend;
