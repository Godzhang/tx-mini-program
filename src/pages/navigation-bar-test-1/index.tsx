import {
  View,
  Text,
  PageMeta,
  ScrollView,
  TaroEvent,
  Navigator,
} from "@tarojs/components";
import Taro, { useLoad } from "@tarojs/taro";
import "./index.scss";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import { calcNavStatusBarHeight } from "@/utils/utils";
import { ArrowLeft, ArrowDown, Search } from "@nutui/icons-react-taro";
import { useMemo, useState } from "react";
import { useReactive } from "ahooks";
import { Input } from "@nutui/nutui-react-taro";

const AddressSelect = (props: { city: string }) => {
  return (
    <Navigator className="address-select" url="/pages/address-select/index">
      {props.city}
      <ArrowDown size="14" color="#333" style={{ marginLeft: "5px" }} />
    </Navigator>
  );
};

const SearchBar = () => {
  return (
    <Navigator className="search-bar" url="/pages/search/index">
      <Search size="14" />
      <View
        // placeholder="一键搜索吃喝玩乐住"
        className="search-tip"
      >
        晧渔港 · 广东顺德菜馆
      </View>
    </Navigator>
  );
};

export default function NavigationBarTest1() {
  const { navStatusBarHeight } = calcNavStatusBarHeight();

  return (
    <ScrollView
      className="index-wrapper"
      scrollY
      style={{ paddingTop: navStatusBarHeight }}
    >
      <NavigationBar
        title="首页"
        // statusBarBackgroundColor="rgb(255,195,1)"
        backgroundColor="rgb(255,195,1)"
        left={<AddressSelect city="北京" />}
      >
        <SearchBar />
      </NavigationBar>
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
