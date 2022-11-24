import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={425}
    height={445}
    viewBox="0 0 425 445"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="0" ry="0" width="150" height="150" />
    <rect x="180" y="90" rx="0" ry="0" width="88" height="26" />
    <rect x="180" y="0" rx="0" ry="0" width="111" height="27" />
    <rect x="180" y="124" rx="0" ry="0" width="88" height="26" />
    <rect x="0" y="175" rx="0" ry="0" width="190" height="21" />
    <rect x="0" y="217" rx="0" ry="0" width="281" height="14" />
    <rect x="0" y="242" rx="0" ry="0" width="281" height="14" />
    <rect x="0" y="267" rx="0" ry="0" width="281" height="14" />
    <rect x="0" y="296" rx="0" ry="0" width="281" height="14" />
  </ContentLoader>
);

export default Skeleton;
