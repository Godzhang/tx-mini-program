export default function SkeletonView(props) {
  const { loading, children, skeletonRender } = props;
  if (loading) {
    return skeletonRender();
  }
  return children;
}
