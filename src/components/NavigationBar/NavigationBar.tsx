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
  // const menuInfo = Taro.getMenuButtonBoundingClientRect();
  const { navigationBarHeight } = calcNavStatusBarHeight();

  const navigationBarStyle = useReactive({
    marginTop: `${Taro.pxTransform(sysInfo.statusBarHeight || 0)}`,
    // paddingRight: `${windowWidth - menuInfo.left}px`,
    height: `${navigationBarHeight}`,
    backgroundColor: backgroundColor || "#fff",
  });

  const renderLeft = () => {
    if (props.left) {
      return <View className="navigation-bar-left">{props.left}</View>;
    }
    return null;
  };
  const renderMain = () => {};

  return (
    <View
      className="navigation-bar-container"
      style={{ backgroundColor: statusBarBackgroundColor || "#fff" }}
    >
      <View className="navigation-bar" style={navigationBarStyle}>
        {renderLeft()}
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
