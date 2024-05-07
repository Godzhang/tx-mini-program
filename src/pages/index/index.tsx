import { View, Text } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import { Button } from "@nutui/nutui-react-taro";
import { Plus } from "@nutui/icons-react-taro";
import "./index.scss";

export default function Index() {
  useLoad(() => {
    console.log("Page loaded.");
  });

  return (
    <View className="container">
      <View className="task-list"></View>
      <View className="task-input">
        <Button type="primary" icon={<Plus size="20" />} />
      </View>
    </View>
  );
}
