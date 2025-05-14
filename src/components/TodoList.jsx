import React from "react";
import tick from "../assets/tick.png";
import not_tick from "../assets/not_tick.png";
import delete_png from "../assets/delete.png";

const TodoList = ({ text, isComplete, id, deleteToDo, toggle }) => {
  return (
    <div className="flex mt-5 justify-between">
      <div className="flex gap-2 items-center cursor-pointer">
        <img src={isComplete ? tick : not_tick} className="w-5 h-5" />
        <p
          onClick={() => toggle(id)}
          className={`text-slate-700 p-0 text-sm font-semibold text-center decoration-slate-500 ${
            isComplete ? "line-through" : " "
          }`}
        >
          {text}
        </p>
      </div>
      <img
        onClick={() => deleteToDo(id)}
        src={delete_png}
        className="w-4 h-4 cursor-pointer"
      />
    </div>
  );
};

export default TodoList;
