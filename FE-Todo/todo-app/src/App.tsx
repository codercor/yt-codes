import React, { useEffect, useState } from "react";

export default function App() {
  let initialValue = JSON.parse(localStorage.getItem("todos") as string) || [];
  const [todos, setTodos] = useState<string[]>(initialValue);
  const handleDelete = (index: number) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="border-2  w-[400px] mx-auto flex gap-[20px] flex-col justify-center items-center h-[300px]">
      <h1 className="text-[24px] font-bold">Todo App</h1>
      <input
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            setTodos([...todos, e.currentTarget.value]);
            e.currentTarget.value = "";
          }
        }}
        className="border-2 w-[90%]"
        type="text"
      />
      <div className="w-[90%] border-2 h-full">
        {todos.map((item, index) => (
          <Todo
            todo={item}
            deleteTodo={() => {
              handleDelete(index);
            }}
          />
        ))}
      </div>
    </div>
  );
}

const Todo = ({
  todo,
  deleteTodo,
}: {
  todo: string;
  deleteTodo: () => void;
}) => (
  <div className="w-full h-[50px] border-2  flex justify-between px-2 items-center">
    <p className="text-[20px] font-medium">{todo} </p>
    <div className="w-[20%] flex justify-between">
      <button onClick={() => deleteTodo()} className="ml-auto">
        ❌
      </button>
    </div>
  </div>
);
