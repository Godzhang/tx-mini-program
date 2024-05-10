import { View, Text } from "@tarojs/components";
import { Button, Cell, Input, Toast } from "@nutui/nutui-react-taro";
import { Plus, Close } from "@nutui/icons-react-taro";
import "./index.scss";
import { useEffect, useState } from "react";
import Taro, { useLoad } from "@tarojs/taro";

export default function Index() {
  return (
    <View className="index-wrapper">
      <View className="top-menu container">tab</View>
      <View className="search container">search</View>
      <View className="carousel container">carousel</View>
      <View className="hot-video container">hot-video</View>
      <View className="guess-favorite container">guess-favorite</View>
      <View className="recommand container">recommand</View>
    </View>
  );
}
