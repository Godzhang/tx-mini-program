export default defineAppConfig({
  // pages: [
  //   "pages/index/index",
  //   "pages/my/index",
  //   "packageMy/pages/mysetting/index",
  // ],
  // pages: ["pages/index/index", "pages/my/index"],
  // subPackages: [
  //   {
  //     root: "packageMy",
  //     pages: ["pages/mysetting/index"],
  //   },
  // ],
  pages: [
    "pages/navigation-bar-test-1/index",
    "pages/navigation-bar-test-2/index",
    "pages/address-select/index",
    "pages/search/index",
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    color: "#999",
    selectedColor: "#333",
    backgroundColor: "#fff",
    list: [
      {
        pagePath: "pages/navigation-bar-test-1/index",
        text: "首页",
        iconPath: "./assets/tabbar/home.png",
        selectedIconPath: "./assets/tabbar/home-active.png",
      },
      {
        pagePath: "pages/navigation-bar-test-2/index",
        text: "民宿",
        iconPath: "./assets/tabbar/my.png",
        selectedIconPath: "./assets/tabbar/my-active.png",
      },
    ],
    // list: [
    //   {
    //     pagePath: "pages/index/index",
    //     text: "首页",
    //     iconPath: "./assets/tabbar/home.png",
    //     selectedIconPath: "./assets/tabbar/home-active.png",
    //   },
    //   {
    //     pagePath: "pages/my/index",
    //     text: "我的",
    //     iconPath: "./assets/tabbar/my.png",
    //     selectedIconPath: "./assets/tabbar/my-active.png",
    //   },
    // ],
  },
});
