import { useState ,useEffect} from "react";
import { ToDoItems } from "./ToDoItems";
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
  function deleteItem(id)
  {
     setItems(prevValue =>{
      return prevValue.filter((item,index)=>{
        return index !== id;
      })
     });
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
          {items.map((a,index) => (
          <ToDoItems key={index} id={index}text={a} isDelete={deleteItem}/>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Body;
