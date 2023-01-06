import { LightningSlash, PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Task from "./Components/Task";

interface TaskProps {
  text: string;
  state: boolean;
}

function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [textTask, setTextTask] = useState("");

  const handleCreateNewTask = (event: FormEvent) => {
    event.preventDefault();
    setTasks([{ text: textTask, state: false }, ...tasks]);
    setTextTask("");
  };

  const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTextTask(event.target.value);
  };

  const deleteTask = (taskToDelete: object) => {
    const newTasksList = tasks.filter((task) => {
      return task !== taskToDelete;
    });
    setTasks(newTasksList);
  };
  return (
    <div className="grid grid-cols-6 w-full">
      <div className="col-span-6 z-0 ">
        <Header />
      </div>
      <div className="col-span-1" />
      <div className="col-span-4 -mt-7 z-10 relative flex flex-col gap-9">
        <form
          onSubmit={handleCreateNewTask}
          className="flex flex-col justify-center lg:flex-row items-center gap-3"
        >
          <input
            className="appearance-none w-full h-14 p-3 focus:border-blue-100   rounded-lg bg-gray-500 text-gray-200 placeholder:text-gray-300 text-sm leading-tight shadow"
            placeholder="Adicione uma nova tarefa"
            type="text"
            required
            value={textTask}
            onChange={handleTextChange}
          />
          <button
            type="submit"
            className="transition h-14 gap-2 w-full sm:w-28 rounded-lg p-3 bg-blue-100 hover:bg-blue-300 active:bg-blue-200 flex items-center justify-center shadow"
          >
            <p className="text-sm">Criar</p>
            <PlusCircle size={20} />
          </button>
        </form>
        <div className="flex justify-between gap-3">
          <div className="flex gap-2 items-center">
            <p className="text-blue-200">Tarefas Criadas</p>
            <p className="p-1 rounded-3xl bg-gray-400">{tasks.length}</p>
          </div>
          <div>
            <div className="flex gap-2 items-center">
              <p className="text-purpleDark">Tarefas Concluidas</p>
              <p className="p-1 rounded-full bg-gray-400">0</p>
            </div>
          </div>
        </div>
        <div className="w-full bg-gray-400 h-[1px]" />
        {tasks.length === 0 ? (
          <div className="mt-5 flex flex-col items-center text-gray-300 text-center">
            <LightningSlash size={32} />
            <p className="mt-10 ">Você ainda não tem tarefas cadastradas</p>
            <p className="font-light ">
              Crie tarefas e organize seus itens a fazer
            </p>
          </div>
        ) : (
          <>
            {tasks.map((element) => (
              <Task
                text={element.text}
                deleteTask={deleteTask}
                task={element}
                check={element.state}
              />
            ))}
          </>
        )}

        <div className="flex flex-col gap-4"></div>
      </div>
      <div className="col-span-1" />
    </div>
  );
}

export default App;
