import "./Adder.css";
import React, { useState } from "react";
import { Button, Form, Input, DatePicker } from "antd";
import tasksStore from "./store/tasks";

const { TextArea } = Input;

export function Adder() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [missingName, setMissingName] = useState(false);
  const [missingDate, setMissingDate] = useState(false);

  const handleСhangeName = (event) => {
    setMissingName(false);
    setName(event.target.value);
  };

  const handleСhangeDate = (event) => {
    setMissingDate(false);
    if (event) {
      setDate(
        event
        //new Date(event.$y, event.$M, event.$D)
      );
    } else {
      setDate("");
    }
  };

  const handleСhangeDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmitClick = () => {
    if (name && date) {
      tasksStore.add({ name: name, date: date.$d, description: description });
      setName("");
      setDate("");
      setDescription("");
    } else {
      if (!name) {
        setMissingName(true);
      }
      if (!date) {
        setMissingDate(true);
      }
    }
  };

  return (
    <Form className="adder">
      <div className="nameDateDiv">
        <Input
          value={name}
          onChange={handleСhangeName}
          placeholder="Название"
          style={{
            margin: "0 10px 10px 0",
            outline: missingName ? "1px solid #FF8484" : "",
          }}
        ></Input>
        <DatePicker
          format="DD.MM.YYYY"
          value={date}
          onChange={handleСhangeDate}
          style={{
            margin: "0 0 10px 0",
            width: "170px",
            outline: missingDate ? "1px solid #FF8484" : "",
          }}
        ></DatePicker>
      </div>
      <TextArea
        value={description}
        onChange={handleСhangeDescription}
        placeholder="Описание"
        autoSize={{
          minRows: 5,
          maxRows: 10,
        }}
      />
      <Button
        type="primary"
        onClick={handleSubmitClick}
        style={{ margin: "10px 0 0 0" }}
      >
        Добавить
      </Button>
    </Form>
  );
}
