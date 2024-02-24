import { useReducer } from 'react';
import { AddTask } from 'src/components/AddTask';
import { TaskList } from 'src/components/TaskList';
import { tasksReducer } from 'src/utils/tasksReducer';

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
  // const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  const handleAddTask = (text: string) => {
    dispatch(
      // action 객체
      {
        type: 'added',
        id: nextId++,
        text: text,
      },
    );
  };

  const handleChangeTask = (task: Task) => {
    dispatch(
      // action 객체
      {
        type: 'changed',
        task: task,
      },
    );
  };

  const handleDeleteTask = (taskId: number) => {
    dispatch(
      // action 객체
      {
        type: 'deleted',
        id: taskId,
      },
    );
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
