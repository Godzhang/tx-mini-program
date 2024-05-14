import { View, Text } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import "./index.scss";
import { Cell, Switch } from "@nutui/nutui-react-taro";
import "./testSubpackage";

export default function Mysetting() {
  useLoad(() => {
    console.log("Page loaded.");
  });

  return (
    <View className="mysetting">
      <Cell title="个性化内容推荐" extra={<Switch defaultChecked />} />
    </View>
  );
}
