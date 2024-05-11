import { ScrollView } from "@tarojs/components";
import "./PageScrollView.scss";

export default function PageScrollView(props) {
  const { children, ...restProps } = props;
  return (
    <ScrollView className="page-scroll-view" {...restProps}>
      {children}
    </ScrollView>
  );
}
