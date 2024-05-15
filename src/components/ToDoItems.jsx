export function ToDoItems(props) {
  return (
    <div style={{borderBottom: "1px dotted darkGrey",padding:"1rem"}}>
        
      <li>{props.text}</li> <button onClick={()=>{ props.isDelete(props.id);}}><span>DONE</span></button>
   
    </div>
  );
}
