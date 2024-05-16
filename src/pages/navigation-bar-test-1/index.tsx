import {
  View,
  Text,
  PageMeta,
  ScrollView,
  TaroEvent,
} from "@tarojs/components";
import Taro, { useLoad } from "@tarojs/taro";
import "./index.scss";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import { calcNavStatusBarHeight } from "@/utils/utils";
import { ArrowLeft } from "@nutui/icons-react-taro";
import { useMemo, useState } from "react";
import { useReactive } from "ahooks";

export default function NavigationBarTest1() {
  const bgColorState = useReactive({
    r: 255,
    g: 255,
    b: 255,
    a: 0,
  });
  const bgColor = useMemo(
    () =>
      `rgba(${bgColorState.r}, ${bgColorState.g}, ${bgColorState.b}, ${bgColorState.a})`,
    [bgColorState]
  );
  const { navStatusBarHeight } = calcNavStatusBarHeight();

  return (
    <ScrollView
      className="index-wrapper"
      scrollY
      style={{ paddingTop: navStatusBarHeight }}
    >
      <NavigationBar
        title="首页"
        statusBarBackgroundColor={bgColor}
        backgroundColor={bgColor}
        // left={}
      />
      <View className="content">
        {Array.from({ length: 10 }).map((_, index) => (
          <View key={index} className="item">
            {index + 1}
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
