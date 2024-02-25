import { useContext } from 'react';
import { TasksContext } from 'src/context/tasks-content';

export const useTasks = () => {
  return useContext(TasksContext);
};
