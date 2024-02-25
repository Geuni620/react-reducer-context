import { useReducer } from 'react';
import { TasksContext, TasksDispatchContext } from 'src/context/tasks-content';
import { tasksReducer } from 'src/utils/tasksReducer';

const initialTasks = [
  { id: 0, text: 'Visit Kafka Museum', done: true },
  { id: 1, text: 'Watch a puppet show', done: false },
  { id: 2, text: 'Lennon Wall pic', done: false },
];

type TasksProviderProps = {
  children: React.ReactNode;
};

export const TasksProvider: React.FC<TasksProviderProps> = ({ children }) => {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
};
