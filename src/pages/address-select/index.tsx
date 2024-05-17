import { View, Text } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import "./index.scss";

export default function AddressSelect() {
  useLoad(() => {
    console.log("Page loaded.");
  });

  return (
    <View className="address-select">
      <View className="content">address-select</View>
    </View>
  );
}
