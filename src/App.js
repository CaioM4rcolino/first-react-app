import "./App.css";
import { useState, useEffect } from "react";

function InitialMessage() {
  return (

    <p className="initialmessage">Você não tem tarefas.</p>

  );
}

function ToDoList() {

  const [taskList, setTaskList] = useState([]);
  const [inputTask, setInputTask] = useState({ id: "", description: "" });

  window.addEventListener("beforeunload", () => {
    localStorage.setItem("lista", JSON.stringify(taskList))
  })

  useEffect(() => {

    setTaskList(JSON.parse(localStorage.getItem("lista")) || [])


  }, []);

  const handleInsert = (description) => {

    const newId = taskList.length === 0 ? 1 : taskList[taskList.length - 1].id + 1;

    const task = {
      id: newId,
      description,
    }
    setTaskList([...taskList, task]);
  }

  const handleRemove = (id) => {
    setTaskList(taskList.filter(task => task.id !== id))
  }


  const fillForm = (task) => {
    setInputTask(task)
  }

  const handleEdit = () => {
    setTaskList(
      taskList.map((task) => (task.id === inputTask.id ? inputTask : task))
    );
  }

  return (
    <div className="container">
      <Form
        handleInsert={handleInsert}
        newTask={inputTask}
        setNewTask={setInputTask}
        handleEdit={handleEdit}
      />
      <List
        list={taskList}
        handleRemove={handleRemove}
        fillForm={fillForm}
      />
    </div>
  )
}

function Form({ handleInsert, newTask, setNewTask, handleEdit }) {

  const handleNewTask = (e) => {
    setNewTask({ ...newTask, description: e.target.value })
  }

  const handleSubmit = (e) => {

    const inputBox = document.getElementById("inputBox");
    e.preventDefault();

    if (newTask.id === "") {
      handleInsert(newTask.description);
    }
    else {
      handleEdit()
    }

    setNewTask({ id: "", description: "" })

    inputBox.value = ""
  };

  return (

    <form className="form" onSubmit={handleSubmit}>
      <input
        id="inputBox"
        value={newTask.description}
        type="text"
        onChange={handleNewTask}
        required
      />
      <button>OK</button>
    </form>

  );
}

function List({ list, handleRemove, fillForm }) {
  return (
    <section>
      {list.length === 0 && <InitialMessage />}
      {list.map((item, index) => (
        <Item
          key={item.id}
          task={item}
          index={index}
          handleRemove={handleRemove}
          fillForm={fillForm} />
      ))}
    </section>
  )
}

function Item({ task, handleRemove, fillForm, index }) {
  return (
    <article className="item">
      <p>{index + 1} - {task.description}</p>

      <div>
        <span style={{ fontSize: 25 }} onClick={() => fillForm(task)}>
          &#9998;
        </span>
        <span onClick={() => handleRemove(task.id)}>&times;</span>
      </div>


    </article>
  );
}

export default ToDoList;
