import { View, Text } from "@tarojs/components";
import { Button, Cell, Input, Toast } from "@nutui/nutui-react-taro";
import { Plus, Close } from "@nutui/icons-react-taro";
import "./index.scss";
import { useState } from "react";
import Taro from "@tarojs/taro";

export default function Index() {
  const [taskList, setTaskList] = useState<string[]>([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (!newTask.trim()) {
      Taro.showToast({
        title: "Please input task name",
        icon: "none",
        duration: 1000,
        mask: true,
      });
      return;
    }
    if (taskList.includes(newTask)) {
      Taro.showToast({
        title: "Task already exists",
        icon: "none",
        duration: 1000,
        mask: true,
      });
      return;
    }
    setTaskList([newTask, ...taskList]);
    setNewTask("");
  };

  const removeTask = (task) => {
    const index = taskList.indexOf(task);
    if (index !== -1) {
      setTaskList([...taskList.slice(0, index), ...taskList.slice(index + 1)]);
    }
  };

  return (
    <View className="container">
      <View className="task-input-box">
        <Input
          className="task-input"
          placeholder="Add task"
          clearable
          autoFocus
          value={newTask}
          onChange={(s) => setNewTask(s)}
        />
        <Button type="primary" icon={<Plus size="20" />} onClick={addTask} />
      </View>
      <View className="task-list">
        {taskList.map((task) => (
          <Cell
            key={task}
            title={task}
            extra={<Close onClick={() => removeTask(task)} />}
          />
        ))}
      </View>
    </View>
  );
}
