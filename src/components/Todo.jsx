import { useEffect, useRef, useState } from "react";
import todo_icon from "../assets/todo_icon.png";
import TodoList from "./TodoList";

const Todo = () => {
  const inputBox = useRef();
  const [toDoTask, setToDoTask] = useState(localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : []);

  const addTask = () => {
    const inputText = inputBox.current.value.trim();
    if (inputText === "") return null;

    const newToDo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };

    setToDoTask((prev) => [...prev, newToDo]);
    inputBox.current.value = "";
  };

  const deleteToDo = (id) => {
    setToDoTask((prevToDo) => {
      return prevToDo.filter((todo) => todo.id !== id);
    });
  };

  const toggle = (id) => {
    setToDoTask((prev) => {
      return prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isComplete: !todo.isComplete };
        }
        return todo;
      });
    });
  };

  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(toDoTask));
  },[toDoTask])


  return (
    <div className="bg-amber-50 h-2/3 w-1/4 rounded-md px-5">
      <div className="flex gap-5 mt-3 items-center">
        <img src={todo_icon} className="h-8" />
        <h2 className="font-medium text-2xl">To-Do List</h2>
      </div>
      <div className="bg-gray-200 mt-5 h-8 flex rounded-full justify-evenly items-center text-sm">
        <input
          type="text"
          ref={inputBox}
          className="outline-none border-0 text-slate-700 pl-5 h-full rounded-l-full"
          placeholder="Add your task"
        />
        <button
          onClick={addTask}
          className="bg-orange-600 text-white h-full w-2/3 rounded-full cursor-pointer"
        >
          Add +
        </button>
      </div>
      <div>
        {toDoTask.map((item, index) => {
          return (
            <TodoList
              key={index}
              text={item.text}
              id={item.id}
              isComplete={item.isComplete}
              deleteToDo={deleteToDo}
              toggle={toggle}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
