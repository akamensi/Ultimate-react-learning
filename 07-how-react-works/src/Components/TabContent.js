import React, { useState } from "react";

const TabContent = ({ item }) => {
  const [showDetails, setShowDetails] = useState(true);
  const [likes, setLikes] = useState(0);

  //To know how manytime the component will render after the eventHandler "handleUndo"
  // so I can see the automatic batching of update multiple state like in the "handleUndo"
  console.log("render");

  function handleInc() {
    setLikes(likes + 1);
  }

  /*   function handleTripleInc(){
    setLikes(likes + 1);
    console.log(likes);
    setLikes(likes + 1);
    setLikes(likes + 1);
      } we need a callBack function so we push the state to update line by line like the next */

  //each time that we set state based on the previous state or on the current state
  //-we should always , always use a callBack function
  function handleTripleInc() {
    setLikes((likes) => likes + 1);
    setLikes((likes) => likes + 1);
    setLikes((likes) => likes + 1);
  }

  function handleUndo() {
    setShowDetails(true);
    setLikes(0);
  }

  function handleUndoLater() {
    setTimeout(handleUndo, 2000);
  }

  return (
    <div className="tab-content">
      <h4>{item.summary}</h4>
      {showDetails && <p>{item.details}</p>}

      <div className="tab-actions">
        <button onClick={() => setShowDetails((h) => !h)}>
          {showDetails ? "Hide" : "Show"} details
        </button>

        <div className="hearts-counter">
          <span>{likes} ❤️</span>
          <button onClick={handleInc}>+</button>
          <button onClick={handleTripleInc}>+++</button>
        </div>
      </div>

      <div className="tab-undo">
        <button onClick={handleUndo}>Undo</button>
        <button onClick={handleUndoLater}>Undo in 2s</button>
      </div>
    </div>
  );
};

export default TabContent;
