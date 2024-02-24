import { useState } from 'react';

type Task = {
  id: number;
  text: string;
  done: boolean;
};

type TaskListProps = {
  tasks: Task[];
  onChangeTask: (task: Task) => void;
  onDeleteTask: (taskId: number) => void;
};

export const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onChangeTask,
  onDeleteTask,
}) => {
  const [editTaskId, setEditTaskId] = useState<number | null>(null);
  const [editText, setEditText] = useState<string>('');

  const handleEdit = (task: Task) => {
    setEditTaskId(task.id);
    setEditText(task.text);
  };

  const handleSave = (id: number) => {
    const updatedTask = {
      id,
      text: editText,
      done: tasks.find((task) => task.id === id)?.done || false,
    };
    onChangeTask(updatedTask);
    setEditTaskId(null);
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <input
            type="checkbox"
            checked={task.done}
            onChange={() => onChangeTask({ ...task, done: !task.done })}
          />
          {editTaskId === task.id ? (
            <>
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
              <button onClick={() => handleSave(task.id)}>Save</button>
            </>
          ) : (
            <>
              {task.text}
              <button onClick={() => handleEdit(task)}>Edit</button>
            </>
          )}
          <button onClick={() => onDeleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
