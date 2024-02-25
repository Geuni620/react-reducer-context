import { useContext, useRef } from 'react';
import { TasksDispatchContext } from 'src/context/tasks-content';

export const AddTask: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useContext(TasksDispatchContext);
  if (!dispatch) return;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = inputRef.current?.value;
    if (text) {
      dispatch({
        type: 'added',
        id: Math.floor(Math.random() * 1000),
        text,
      });
      inputRef.current.value = '';
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input ref={inputRef} id="task" type="text" />
      <button type="submit">Add</button>
    </form>
  );
};
