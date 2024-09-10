import React from "react";
import { useState } from "react";

function ToDoList() {
  const [activity, setActivity] = useState("");
  const [listData, setListData] = useState([]);

  function addActivity() {
    setListData((listData) => {
      const updatedList = [...listData, activity];
      console.log(updatedList);
      setActivity("");
      return updatedList;
    });
  }

  return (
    <>
      <div classname="container">
        <h1>ToDoList App</h1>
        <input
          type="text"
          placeholder="enter item"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />

        <button onClick={addActivity}>Add</button>

        <p>Here is your List:{")"}</p>

        {listData != [] &&
          listData.map((data, i) => {
            return (
              <>
                <p>
                  <div>{data}</div>
                </p>
              </>
            );
          })}
      </div>
    </>
  );
}

export default ToDoList;
