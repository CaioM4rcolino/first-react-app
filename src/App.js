import "./App.css";
import { useState } from "react";

function ToDoList(){

  const [taskList, setTaskList] = useState([
    {
      id: 1,
      description: "Estudar Inglês",
    },
  ]);

    return(
      <div className="container">
        <Form/>
        <List list={taskList}/>
      </div>
    )
}

function Form(){
  return(
  
    <form className="form">
        <input type="text"/>
        <button>OK</button>
    </form>
  
  );
}

function List({list}){
  return(
    <section>
      {list.map(item => <Item task={item}/>)}
    </section>
  )
}

function Item({task}){
  return(
    <article class="item">
      <p>{task.id} - {task.description}</p>
      <span>&times;</span>
    </article>
  );
}

export default ToDoList;
