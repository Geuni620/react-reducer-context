import { useContext } from 'react';
import { TasksDispatchContext } from 'src/context/tasks-content';

export const useTasksDispatch = () => {
  return useContext(TasksDispatchContext);
};
