import { Trash } from "phosphor-react";
import { useState } from "react";
import { TaskProps } from "../../App";

interface TaskPropsV2 {
  text: string;
  check: boolean;
  task: TaskProps;
  deleteTask: (task: object) => void;
  checkTask: (prop: TaskProps) => void;
}

export default function Task({
  text,
  check,
  task,
  deleteTask,
  checkTask,
}: TaskPropsV2) {
  const [isCheck, setIsCheck] = useState(false);
  const handleCheckBox = () => {
    checkTask(task);
  };

  const handleClickButton = () => {
    deleteTask(task);
  };
  return (
    <div className="bg-gray-500 rounded-lg flex items-start justify-between gap-4 p-5">
      <input
        type="checkbox"
        checked={check}
        onChange={handleCheckBox}
        className="appearance-none rounded-full bg-gray-500 ring-2 ring-purpleDark text-purpleDark "
      />
      <p
        className={
          check
            ? "w-full text-left line-through text-gray-400 "
            : "w-full text-left"
        }
      >
        {text}
      </p>
      <button
        onClick={handleClickButton}
        className="transition ease-in-out border-0 hover:text-danger "
      >
        <Trash size={20} />
      </button>
    </div>
  );
}
