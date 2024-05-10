import { View, Text } from "@tarojs/components";
import "./index.scss";
import { useState } from "react";
import Taro, { useLoad } from "@tarojs/taro";

const url =
  process.env.TARO_ENV === "h5"
    ? "/hello"
    : "https://www.yesx2.com/api/app.php?s=App.HelloWorld.Say";

export default function Helloworld() {
  const [title, setTitle] = useState("");

  useLoad(() => {
    Taro.request({
      url,
      method: "GET",
      success: (res) => {
        if (res.statusCode === 200) {
          setTitle("Hello World");
        }
      },
    });
  });

  return (
    <View className="container">
      <View>px</View>
      {title && <Text className="text">&lt;Text&gt;{title}&lt;/Text&gt;</Text>}
      <View>百分比</View>
      <View className="percent">width: 50%;</View>
      <View>vw</View>
      <View className="vwtest">width: 50vw;height:10vw</View>
      <View>rem</View>
      <View className="remtest">width: 10rem;height: 2rem</View>
      <View>process.env.TARO_ENV</View>
      <View className="taro_env">Hello {process.env.TARO_ENV}</View>
    </View>
  );
}
