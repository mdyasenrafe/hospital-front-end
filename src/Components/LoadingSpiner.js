import React from "react";
import { css } from "@emotion/react";
import BounceLoader from "react-spinners/BounceLoader";

const LoadingSpiner = ({ loading, height }) => {
  const override = css`
    display: flex;
    align-items: center;
    margin: 0 auto;
    border-color: red;
  `;
  return (
    <div
      style={{ height: height, display: "flex" }}
      className="align-items-center"
    >
      <BounceLoader
        color={"#e90c3f"}
        loading={loading}
        css={override}
        size={60}
      />
    </div>
  );
};

export default LoadingSpiner;
