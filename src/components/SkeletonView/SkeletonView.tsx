import { Skeleton } from "@nutui/nutui-react-taro";

export default function SkeletonView(props) {
  const { loading, children, ...restProps } = props;
  if (loading) {
    return <Skeleton {...restProps} />;
  }
  return children;
}
