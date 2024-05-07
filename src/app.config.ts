export default defineAppConfig({
  pages: ["pages/index/index", "pages/my/index"],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  // tabBar: {
  //   color: "#999",
  //   selectedColor: "#333",
  //   backgroundColor: "#fff",
  //   list: [
  //     {
  //       pagePath: "pages/index/index",
  //       text: "首页",
  //     },
  //     {
  //       pagePath: "pages/my/index",
  //       text: "我的",
  //     },
  //   ],
  // },
});
