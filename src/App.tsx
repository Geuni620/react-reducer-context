import { useReducer } from 'react';
import { AddTask } from 'src/components/AddTask';
import { TaskList } from 'src/components/TaskList';
import { TasksContext, TasksDispatchContext } from 'src/context/tasks-content';
import { tasksReducer } from 'src/utils/tasksReducer';

export type Task = {
  id: number;
  text: string;
  done: boolean;
};

const initialTasks = [
  { id: 0, text: 'Visit Kafka Museum', done: true },
  { id: 1, text: 'Watch a puppet show', done: false },
  { id: 2, text: 'Lennon Wall pic', done: false },
];

export const App = () => {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        <section className="flex h-screen items-center justify-center gap-4">
          <h1>Prague itinerary</h1>
          <AddTask />
          <TaskList />
        </section>
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
};
