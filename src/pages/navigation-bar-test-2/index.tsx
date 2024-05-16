import {
  View,
  Text,
  ScrollView,
  ScrollViewProps,
  BaseEventOrig,
} from "@tarojs/components";
import Taro, { useLoad } from "@tarojs/taro";
import "./index.scss";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import { calcNavStatusBarHeight } from "@/utils/utils";
import { ArrowLeft } from "@nutui/icons-react-taro";
import { useMemo, useState } from "react";
import { useReactive, useToggle } from "ahooks";

export default function NavigationBarTest2() {
  const [bgColorAlpha, setBgColorAlpha] = useState(0);
  const bgColor = useMemo(
    () => `rgba(255, 255, 255, ${bgColorAlpha})`,
    [bgColorAlpha]
  );
  const [
    leftItemColor,
    { setLeft: setLeftItemWhite, setRight: setLeftItemBlack },
  ] = useToggle("#fff", "#000");

  const scrollHandle = (
    detail: ScrollViewProps.onScrollDetail | { scrollTop: number }
  ) => {
    const { scrollTop } = detail;

    if (scrollTop <= 30) {
      setBgColorAlpha(0);
      setLeftItemWhite();
    } else if (scrollTop <= 300) {
      setBgColorAlpha(scrollTop / 300);
      setLeftItemBlack();
    } else if (scrollTop > 300) {
      setBgColorAlpha(1);
      setLeftItemBlack();
    }
  };

  // TODO: 问题：向上滑的特别快，有时检测不到 scrollTop = 0
  const onScrollToUpperFunc = () => {
    setTimeout(() => {
      // setBgColorAlpha(0);
      console.log(Taro.getSystemInfoSync());
    }, 500);
  };

  return (
    <ScrollView
      className="index-wrapper"
      scrollY
      enhanced
      onScroll={(event) => scrollHandle(event.detail)}
      onScrollToUpper={() => scrollHandle({ scrollTop: 0 })}
      // onDragEnd={onScrollToUpperFunc}
    >
      <NavigationBar
        title="首页"
        statusBarBackgroundColor={bgColor}
        backgroundColor={bgColor}
        left={
          <View className="left-item" style={{ color: leftItemColor }}>
            <ArrowLeft />
            <Text>美团·酒店</Text>
          </View>
        }
      />
      <View className="content"></View>
    </ScrollView>
  );
}
