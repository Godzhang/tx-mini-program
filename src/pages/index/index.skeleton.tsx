import ContentLoader from "react-content-loader";

export const topMenuSkeleton = () => {
  return (
    <ContentLoader viewBox="0 0 375 40">
      <rect x="0" y="0" width="100%" height={50}></rect>
    </ContentLoader>
  );
};

export const searchSkeleton = () => {
  return (
    <ContentLoader viewBox="0 0 375 36">
      {" "}
      <rect x="0" y="0" width="100%" height={50}></rect>{" "}
    </ContentLoader>
  );
};

export const carouselSkeleton = () => {
  return (
    <ContentLoader viewBox="0 0 375 240">
      <rect x="0" y="0" width="100%" height={240}></rect>
    </ContentLoader>
  );
};

export const hotVideoSkeleton = () => {
  return (
    <ContentLoader viewBox="0 0 375 640">
      <rect x="0" y="0" width="100" height="24"></rect>

      <rect x="0" y="44" width="180" height="120"></rect>
      <rect x="0" y="174" width="100" height="20"></rect>
      <rect x="0" y="204" width="150" height="20"></rect>

      <rect x="195" y="44" width="180" height="120"></rect>
      <rect x="195" y="174" width="100" height="20"></rect>
      <rect x="195" y="204" width="150" height="20"></rect>

      <rect x="0" y="244" width="180" height="120"></rect>
      <rect x="0" y="374" width="100" height="20"></rect>
      <rect x="0" y="404" width="150" height="20"></rect>

      <rect x="195" y="244" width="180" height="120"></rect>
      <rect x="195" y="374" width="100" height="20"></rect>
      <rect x="195" y="404" width="150" height="20"></rect>

      <rect x="0" y="444" width="180" height="120"></rect>
      <rect x="0" y="574" width="100" height="20"></rect>
      <rect x="0" y="604" width="150" height="20"></rect>

      <rect x="195" y="444" width="180" height="120"></rect>
      <rect x="195" y="574" width="100" height="20"></rect>
      <rect x="195" y="604" width="150" height="20"></rect>
    </ContentLoader>
  );
};

export default function IndexSkeleton() {
  return (
    <>
      {topMenuSkeleton()}
      {searchSkeleton()}
      {carouselSkeleton()}
      {hotVideoSkeleton()}
    </>
  );
}
