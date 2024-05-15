import { View, Text } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import "./index.scss";
import { Cell, Switch } from "@nutui/nutui-react-taro";
// import func from "./testSubpackage";

export default function Mysetting() {
  useLoad(async () => {
    const func = await import("./testSubpackage");
    console.log(func);
  });

  return (
    <View className="mysetting">
      <Cell title="个性化内容推荐" extra={<Switch defaultChecked />} />
    </View>
  );
}
