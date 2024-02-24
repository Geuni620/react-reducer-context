import { useRef } from 'react';

type AddTaskProps = {
  onAddTask: (text: string) => void;
};

export const AddTask: React.FC<AddTaskProps> = ({ onAddTask }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = inputRef.current?.value;
    if (text) {
      onAddTask(text);
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
