import { View, Text } from "@tarojs/components";
import { Button, Cell, Input, Toast } from "@nutui/nutui-react-taro";
import { Plus, Close } from "@nutui/icons-react-taro";
import "./index.scss";
import { useEffect, useState } from "react";
import Taro, { useLoad } from "@tarojs/taro";
import PageScrollView from "@/components/PageScrollView/PageScrollView";
import { createRequest } from "@/services/index";
import { useRequest } from "ahooks";
import SkeletonView from "@/components/SkeletonView/SkeletonView";
import IndexSkeleton, {
  topMenuSkeleton,
  searchSkeleton,
  carouselSkeleton,
  hotVideoSkeleton,
} from "./index.skeleton";
import { random } from "@/utils/utils";

// 页面骨架屏
export default function Index() {
  const [loading, setLoading] = useState(true);
  const requestTopMenu = createRequest("top-menu", random(1000, 2000));
  const requestSearch = createRequest("search", random(500, 1000));
  const requestCarousel = createRequest("carousel", random(1000, 2000));
  const requestHotVideo = createRequest("hot-video", random(500, 1000));
  const requestGuessFavorite = createRequest(
    "guess-favorite",
    random(1000, 2000)
  );
  const requestRecommand = createRequest("recommand", random(1000, 2000));

  const requestPageData = async () => {
    await Promise.all([
      requestTopMenu(),
      requestSearch(),
      requestCarousel(),
      requestHotVideo(),
      requestGuessFavorite(),
      requestRecommand(),
    ]);
    setLoading(false);
  };

  useLoad(() => {
    requestPageData();
  });

  // 模块骨架屏
  return loading ? (
    <IndexSkeleton />
  ) : (
    <PageScrollView scrollY>
      <View className="index-wrapper">
        <View className="top-menu container">
          <View className="top-menu-content content">tab</View>
        </View>
        <View className="search container">
          <View className="search-content content">search</View>
        </View>
        <View className="carousel container">
          <View className="carousel-content content">carousel</View>
        </View>
        <View className="hot-video container">
          <View className="hot-video-content">
            <View className="hot-video-title">重磅热播</View>
            <View className="hot-video-list">
              {Array.from({ length: 6 }).map((_, index) => (
                <View className="hot-video-item" key={index}>
                  <View className="hot-video-item-thumb"></View>
                  <View className="hot-video-item-title">逆天至尊</View>
                  <View className="hot-video-item-desc">
                    一剑高下，风雨潇洒
                  </View>
                </View>
              ))}
            </View>
          </View>
        </View>
      </View>
    </PageScrollView>
  );
}

// export default function Index() {
//   const { loading: topMenuLoading, run: requestTopMenu } = useRequest(
//     createRequest("top-menu", 1000),
//     { manual: true }
//   );
//   const { loading: searchLoading, run: requestSearch } = useRequest(
//     createRequest("search", 1500),
//     { manual: true }
//   );
//   const { loading: carouselLoading, run: requestCarousel } = useRequest(
//     createRequest("carousel", 2000),
//     { manual: true }
//   );
//   const { loading: hotVideoLoading, run: requestHotVideo } = useRequest(
//     createRequest("hot-video", 2500),
//     { manual: true }
//   );
//   const { loading: guessFavoriteLoading, run: requestGuessFavorite } =
//     useRequest(createRequest("guess-favorite", 3000), { manual: true });
//   const { loading: recommandLoading, run: requestRecommand } = useRequest(
//     createRequest("recommand", 3500),
//     { manual: true }
//   );

//   const firstScreenRequests = [
//     requestTopMenu,
//     requestSearch,
//     requestCarousel,
//     requestHotVideo,
//   ];
//   const extraScreenRequests = [requestGuessFavorite, requestRecommand];

//   const requestFirstScreenData = async () => {
//     for (const request of firstScreenRequests) {
//       request();
//     }
//   };
//   const requestExtraScreenData = async () => {
//     for (const request of extraScreenRequests) {
//       request();
//     }
//   };

//   const requestPageData = async () => {
//     await requestFirstScreenData();
//     await requestExtraScreenData();
//   };

//   useLoad(() => {
//     requestPageData();
//   });

//   // 模块骨架屏
//   return (
//     <PageScrollView scrollY>
//       <View className="index-wrapper">
//         <View className="top-menu container">
//           <SkeletonView
//             loading={topMenuLoading}
//             skeletonRender={topMenuSkeleton}
//           >
//             <View className="top-menu-content content">tab</View>
//           </SkeletonView>
//         </View>
//         <View className="search container">
//           <SkeletonView loading={searchLoading} skeletonRender={searchSkeleton}>
//             <View className="search-content content">search</View>
//           </SkeletonView>
//         </View>
//         <View className="carousel container">
//           <SkeletonView
//             loading={carouselLoading}
//             skeletonRender={carouselSkeleton}
//           >
//             <View className="carousel-content content">carousel</View>
//           </SkeletonView>
//         </View>
//         <View className="hot-video container">
//           <SkeletonView
//             loading={hotVideoLoading}
//             skeletonRender={hotVideoSkeleton}
//           >
//             <View className="hot-video-content">
//               <View className="hot-video-title">重磅热播</View>
//               <View className="hot-video-list">
//                 {Array.from({ length: 6 }).map((_, index) => (
//                   <View className="hot-video-item" key={index}>
//                     <View className="hot-video-item-thumb"></View>
//                     <View className="hot-video-item-title">逆天至尊</View>
//                     <View className="hot-video-item-desc">
//                       一剑高下，风雨潇洒
//                     </View>
//                   </View>
//                 ))}
//               </View>
//             </View>
//           </SkeletonView>
//         </View>
//       </View>
//     </PageScrollView>
//   );
// }
