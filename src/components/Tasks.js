import "./Tasks.css";
import { Task } from "./Task.js";
import tasksStore from "./store/tasks";
import { observer } from "mobx-react-lite";

export const Tasks = observer(() => {
  return (
    <div className="tasks">
      {tasksStore.tasks.map((task, index) => (
        <Task key={task.name + index} task={task} />
      ))}
    </div>
  );
});
