import "./App.css";
import { useState } from "react";

function ToDoList(){

  const [taskList, setTaskList] = useState([]);

  const handleInsert = (description) =>{

    const newId = taskList.length === 0 ? 1 : taskList[taskList.length - 1].id + 1;

    const task = {
      id: newId,
      description,
    }
    setTaskList([...taskList, task]);
  }

  const handleRemove = (id) =>{
    setTaskList(taskList.filter(task => task.id !== id))
  }

    return(
      <div className="container">
        <Form handleInsert={handleInsert}/>
        <List list={taskList} handleRemove={handleRemove}/>
      </div>
    )
}

function Form({handleInsert}){
  
 const [newTask, setNewTask] = useState("");
 
 const handleNewTask = (e) => {
   setNewTask(e.target.value)
 }

 const handleSubmit = (e) =>{
    e.preventDefault();

    handleInsert(newTask);
 };

  return(
  
    <form className="form" onSubmit={handleSubmit}>
        <input type="text" onChange={handleNewTask} required/>
        <button onC>OK</button>
    </form>
  
  );
}

function List({list, handleRemove}){
  return(
    <section>
      {list.length === 0 && "Você não tem tarefas."}
      {list.map(item => <Item task={item} handleRemove={handleRemove}/>)}
    </section>
  )
}

function Item({task, handleRemove}){
  return(
    <article class="item">
      <p>{task.id} - {task.description}</p>
      <span onClick={() => handleRemove(task.id)}>&times;</span>
    </article>
  );
}

export default ToDoList;
