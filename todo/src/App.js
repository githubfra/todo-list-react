import React, { useState } from "react";
import "./App.css";

function App() {

  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);


 function addItem() {

    if (!newItem) {
      alert("Press enter an item.");
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };

    setItems((oldList) => [...oldList, item]);

    setNewItem("");
  }

  function deleteItem(id) {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  }

  return (
    <div className="App">
      {/* 1. Header  */}
      <h1>Todo List</h1>

      {/* 2. Add new item (input) */}

      <input
        type="text"
        placeholder='Add an item.......'
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)} />

    
      <button onClick={() => addItem()} type="button" className="btn btn-primary">Add</button>
      

      {/* 3. List of unordered list */}
    <div class="container">
    
         <ul>
        {items.map((item) => {
          return (
            <div>
              <li key={item.id}>{item.value}
                <button type="button" 
                        className="btn btn-info"
                        aria-label="Close" 
                        onClick={() => deleteItem(item.id)}>X</button>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  </div>
   );
}

export default App;
