import { useContext, useState } from 'react';
import { TasksContext, TasksDispatchContext } from 'src/context/tasks-content';

type Task = {
  id: number;
  text: string;
  done: boolean;
};

export const TaskList: React.FC = () => {
  const tasks = useContext(TasksContext);
  const dispatch = useContext(TasksDispatchContext);
  const [editTaskId, setEditTaskId] = useState<number | null>(null);
  const [editText, setEditText] = useState<string>('');
  if (!dispatch) return null;

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
    dispatch({
      type: 'changed',
      task: updatedTask,
    });
    setEditTaskId(null);
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <input
            type="checkbox"
            checked={task.done}
            onChange={() =>
              dispatch({
                type: 'changed',
                task: { ...task, done: !task.done },
              })
            }
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
          <button
            onClick={() =>
              dispatch({
                type: 'deleted',
                id: task.id,
              })
            }
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
