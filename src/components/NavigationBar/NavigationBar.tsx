import classnames from "classnames";
import "./NavigationBar.scss";
import { View } from "@tarojs/components";
import { useReactive } from "ahooks";
import Taro from "@tarojs/taro";
import { calcNavStatusBarHeight } from "@/utils/utils";
import { PropsWithChildren } from "react";

export interface NavigationBarProps extends PropsWithChildren {
  title?: string;
  backgroundColor?: string;
  statusBarBackgroundColor?: string;
  left?: React.ReactNode;
}

const NavigationBar = (props: NavigationBarProps) => {
  const { children, title, backgroundColor, statusBarBackgroundColor } = props;

  const sysInfo = Taro.getSystemInfoSync();
  const menuInfo = Taro.getMenuButtonBoundingClientRect();
  const { navigationBarHeight } = calcNavStatusBarHeight();

  const navigationBarStyle = useReactive({
    marginTop: `${Taro.pxTransform(sysInfo.statusBarHeight || 0)}`,
    // marginTop: `${sysInfo.statusBarHeight}px`,
    height: `${navigationBarHeight}`,
    backgroundColor: backgroundColor || "#fff",
  });
  const rightStyle = {
    width: Taro.pxTransform(sysInfo.windowWidth - menuInfo.left),
    height: `${navigationBarHeight}`,
    // flex: 0,
  };

  const renderLeft = () => {
    if (props.left) {
      return <View className="navigation-bar-left">{props.left}</View>;
    }
    return null;
  };

  return (
    <View
      className="navigation-bar-container"
      style={{ backgroundColor: statusBarBackgroundColor || "#fff" }}
    >
      <View className="navigation-bar" style={navigationBarStyle}>
        <View className="navigation-bar-left">{renderLeft()}</View>
        {/* <View className="navigation-bar-main">{children || title}</View> */}
        <View className="navigation-bar-main">{navigationBarHeight}</View>
        <View className="navigation-bar-right" style={rightStyle}></View>
      </View>
    </View>
  );
};
{
  /* <View
  style={{
    position: "absolute",
    top: menuInfo.top,
    left: menuInfo.left,
    width: menuInfo.width / 2,
    height: menuInfo.height,
    backgroundColor: "#000",
    borderTopLeftRadius: "50%",
    borderBottomLeftRadius: "50%",
    zIndex: 999,
  }}
></View> */
}

export default NavigationBar;
