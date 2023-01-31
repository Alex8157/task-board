import { makeAutoObservable } from "mobx";

const makeDoubleDigit = (number) => {
  return `${number}`.length > 1 ? "" + number : "0" + number;
};

class Tasks {
  tasks =
    JSON.parse(localStorage.getItem("tasks")) === null
      ? []
      : JSON.parse(localStorage.getItem("tasks"));

  constructor() {
    makeAutoObservable(this);
  }

  add(task) {
    this.tasks.push({
      ...task,
      date:
        task.date.getFullYear() +
        "." +
        makeDoubleDigit(task.date.getMonth() + 1) +
        "." +
        makeDoubleDigit(task.date.getDate()),
    });
    this.id++;
    this.tasks.sort((a, b) => {
      if (new Date(a.date) > new Date(b.date)) {
        return 1;
      } else {
        return -1;
      }
    });
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }

  delete(task) {
    this.tasks = this.tasks.filter((el) => el !== task);
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }
}
export default new Tasks();
