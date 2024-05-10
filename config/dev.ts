import type { UserConfigExport } from "@tarojs/cli";
export default {
  logger: {
    quiet: false,
    stats: true,
  },
  mini: {},
  h5: {
    devServer: {
      port: 10086,
      proxy: {
        "/hello": {
          target: "https://www.yesx2.com/api/app.php?s=App.HelloWorld.Say",
          changeOrigin: true,
          pathRewrite: { "^/hello": "" },
        },
      },
    },
  },
} satisfies UserConfigExport;
