import React from "react";

const Loader = ({
  height,
  width,
  color,
}: {
  height?: string;
  width?: string;
  color?: string;
}) => {
  return (
    <div
      className={`inline-block animate-spin rounded-full h-4 w-4 border-2 border-t-transparent ${height} ${width}  ${color}`}
    ></div>
  );
};

export default Loader;
