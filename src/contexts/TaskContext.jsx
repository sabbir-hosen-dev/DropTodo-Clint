import { createContext, useState } from "react";

const TaskContext = createContext();

// eslint-disable-next-line react/prop-types
const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const value = {
    tasks,
    setTasks,
  };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};

export { TaskContext, TaskContextProvider };