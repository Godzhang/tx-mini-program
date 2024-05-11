import { View, Text } from "@tarojs/components";
import { Button, Cell, Input, Toast, Skeleton } from "@nutui/nutui-react-taro";
import { Plus, Close } from "@nutui/icons-react-taro";
import "./index.scss";
import { useEffect, useState } from "react";
import Taro, { useLoad } from "@tarojs/taro";
import PageScrollView from "@/components/PageScrollView/PageScrollView";
import { createRequest } from "@/services/index";
import { useRequest } from "ahooks";
import SkeletonView from "@/components/SkeletonView/SkeletonView";

export default function Index() {
  // const [loading, setLoading] = useState(true);

  // useLoad(() => {
  //   const loadingTime = Math.random() * 1000 + 500;
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, loadingTime);
  // });

  const { loading: topMenuLoading, run: requestTopMenu } = useRequest(
    createRequest("top-menu", 1000),
    { manual: true }
  );
  const { loading: searchLoading, run: requestSearch } = useRequest(
    createRequest("search", 1500),
    { manual: true }
  );
  const { loading: carouselLoading, run: requestCarousel } = useRequest(
    createRequest("carousel", 2000),
    { manual: true }
  );
  const { loading: hotVideoLoading, run: requestHotVideo } = useRequest(
    createRequest("hot-video", 2500),
    { manual: true }
  );
  const { loading: guessFavoriteLoading, run: requestGuessFavorite } =
    useRequest(createRequest("guess-favorite", 3000), { manual: true });
  const { loading: recommandLoading, run: requestRecommand } = useRequest(
    createRequest("recommand", 3500),
    { manual: true }
  );

  const firstScreenRequests = [
    requestTopMenu,
    requestSearch,
    requestCarousel,
    requestHotVideo,
  ];
  const extraScreenRequests = [requestGuessFavorite, requestRecommand];

  const requestFirstScreenData = async () => {
    for (const request of firstScreenRequests) {
      request();
    }
  };
  const requestExtraScreenData = async () => {
    for (const request of extraScreenRequests) {
      request();
    }
  };

  const requestPageData = async () => {
    await requestFirstScreenData();
    await requestExtraScreenData();
  };

  useLoad(() => {
    requestPageData();
  });

  return (
    <PageScrollView scrollY>
      <View className="index-wrapper">
        <SkeletonView loading={topMenuLoading}>
          <View className="top-menu container">tab</View>
        </SkeletonView>
        <SkeletonView loading={searchLoading}>
          <View className="search container">search</View>
        </SkeletonView>
        <SkeletonView loading={carouselLoading} rows={5}>
          <View className="carousel container">carousel</View>
        </SkeletonView>
        <SkeletonView loading={hotVideoLoading} rows={10}>
          <View className="hot-video container">hot-video</View>
        </SkeletonView>
        <SkeletonView loading={guessFavoriteLoading} rows={10}>
          <View className="guess-favorite container">guess-favorite</View>
        </SkeletonView>
        <SkeletonView loading={recommandLoading} rows={10}>
          <View className="recommand container">recommand</View>
        </SkeletonView>
      </View>
    </PageScrollView>
  );
}
