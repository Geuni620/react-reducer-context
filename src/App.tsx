import { AddTask } from 'src/components/AddTask';
import { TaskList } from 'src/components/TaskList';

import { TasksProvider } from './context/tasks-provider';

export type Task = {
  id: number;
  text: string;
  done: boolean;
};

export const App = () => {
  return (
    <TasksProvider>
      <section className="flex h-screen items-center justify-center gap-4">
        <h1>Prague itinerary</h1>
        <AddTask />
        <TaskList />
      </section>
    </TasksProvider>
  );
};
