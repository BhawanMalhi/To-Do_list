import { useState } from "react";

function Body() {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);

  function handleInput(event) {
    const newValue = event.target.value;
    setInputData(newValue);
  }
  function addBtn() {
    
    setItems(prevItems => {
        return [...prevItems, inputData];
      });
      setInputData("");
  }
  function deleteItem()
  {

  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleInput} type="text" value={inputData} />
        <button onClick={addBtn}>
          <span>Add</span>
        </button>
      </div>
      <div>
      <ul>
          {items.map(a => (
            <li key={a}>{a} <button onClick={deleteItem}> <span>X</span></button></li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Body;
