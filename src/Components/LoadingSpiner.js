import React from "react";
import { css } from "@emotion/react";
import BounceLoader from "react-spinners/BounceLoader";

const LoadingSpiner = ({ loading }) => {
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;
  return (
    <div>
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
