import { useState } from 'react';
import { AddTask } from 'src/components/AddTask';
import { TaskList } from 'src/components/TaskList';

type Task = {
  id: number;
  text: string;
  done: boolean;
};

let nextId = 3;
const initialTasks = [
  { id: 0, text: 'Visit Kafka Museum', done: true },
  { id: 1, text: 'Watch a puppet show', done: false },
  { id: 2, text: 'Lennon Wall pic', done: false },
];

export const App = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const handleAddTask = (text: string) => {
    setTasks([
      ...tasks,
      {
        id: nextId++,
        text: text,
        done: false,
      },
    ]);
  };

  const handleChangeTask = (task: Task) => {
    setTasks(
      tasks.map((t) =>
        t.id === task.id
          ? {
              ...t,
              done: !t.done,
            }
          : t,
      ),
    );
  };

  const handleDeleteTask = (taskId: number) => {
    setTasks(tasks.filter((t) => t.id !== taskId));
  };

  return (
    <section className="flex h-screen items-center justify-center gap-4">
      <h1>Prague itinerary</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </section>
  );
};
