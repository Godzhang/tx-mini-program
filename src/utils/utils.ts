import Taro from "@tarojs/taro";

export const random = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const calcNavStatusBarHeight = () => {
  const sysInfo = Taro.getSystemInfoSync();
  const menuInfo = Taro.getMenuButtonBoundingClientRect();
  // TODO: statusBarHeight 为 0 的情况处理
  const navigationBarHeight =
    (menuInfo.top - (sysInfo.statusBarHeight || 0)) * 2 + menuInfo.height;
  const navStatusBarHeight =
    navigationBarHeight + (sysInfo.statusBarHeight || 0);

  return {
    navigationBarHeight: Taro.pxTransform(navigationBarHeight),
    navStatusBarHeight: Taro.pxTransform(navStatusBarHeight),
    statusBarHeight: Taro.pxTransform(sysInfo.statusBarHeight || 0),
  };
};
