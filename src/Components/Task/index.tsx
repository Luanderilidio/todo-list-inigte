import { Trash } from "phosphor-react";
import { useState } from "react";

interface TaskProps {
  text: string;
  check: boolean;
  deleteTask: (task: object) => void;
  task: object;
}

export default function Task({ text, check, deleteTask, task }: TaskProps) {
  const [isCheck, setIsCheck] = useState(false);
  const handleCheckBox = () => {
    setIsCheck(!isCheck);
  };

  const handleClickButton = () => {
    deleteTask(task);
  };
  return (
    <div className="bg-gray-500 rounded-lg flex items-start justify-between gap-4 p-5">
      <input
        type="checkbox"
        checked={isCheck}
        onChange={handleCheckBox}
        className="appearance-none rounded-full bg-gray-500 ring-2 ring-purpleDark text-purpleDark "
      />
      <p
        className={
          isCheck
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
