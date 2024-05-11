import { Navigator, View } from "@tarojs/components";
import { ArrowRight } from "@nutui/icons-react-taro";
import "./index.scss";
import { Cell } from "@nutui/nutui-react-taro";

export default function My() {
  return (
    <View className="my-wrapper">
      <View className="avatar container">avatar</View>
      <View className="settings">
        <Navigator url="/pages/mysetting/index">
          <Cell title="设置" extra={<ArrowRight />} />
        </Navigator>
      </View>
    </View>
  );
}
