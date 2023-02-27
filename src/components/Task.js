import "./Task.css";
import React from "react";
import { Typography } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
import tasksStore from "./store/tasks";

const { Text, Title } = Typography;

const makeDDMMYYYY = (date) => {
  return date.split(".").reverse().join(".");
};

export function Task(prop) {
  const deleteTask = () => {
    tasksStore.delete(prop.task);
  };
  return (
    <div className="task">
      <div className="topInfo">
        <Title level={4} ellipsis="true" style={{ margin: "5px" }}>
          {prop.task.name}
        </Title>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Title level={4} style={{ margin: "5px", minWidth: "96px" }}>
            {makeDDMMYYYY(prop.task.date)}
          </Title>
          <CloseCircleOutlined onClick={deleteTask} className="delete" />
        </div>
      </div>
      <Text style={{ whiteSpace: "pre-wrap" }}>{prop.task.description}</Text>
    </div>
  );
}
