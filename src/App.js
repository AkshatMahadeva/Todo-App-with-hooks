import './App.css';
import React, { useState } from "react";
import Todo from './components/Todo';
import Form from './components/Form';

function App() {
  
  const [items, setItems] = useState([]);


  function addItem(inputText){
    setItems((prevItems)=>{
      return [...prevItems, inputText];
    });
  }

  function deleteItem(id){
    setItems(previtems=>{
      return previtems.filter(
        (item, index)=>{
          return index !== id;
        }
      )
    })
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>

  <Form onAdd={addItem}/>

      <div>

        <ul>
          {
            items.map((todoItem, index)=>{
              return <Todo id={index} key={index} text={todoItem} delete={deleteItem}/>
            })
          }
        </ul>

      </div>
    </div>
  );
}


export default App;
