// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export function Button(props) {
  if (props.type === "primary") {
    return (
      <button
        css={css`
          background-color: #074ee8;
          color: white;
          width: 171.19px;
          height: 50px;
        `}
      >
        Button
      </button>
    );
  } else if (props.type === "secondary") {
    return (
      <button
        css={css`
          background-color: #07a4e8;
          color: white;
          width: 171.19px;
          height: 50px;
        `}
      >
        Button
      </button>
    );
  }
  return (
    <>
      <button
        css={css`
          color: white;
          width: 200px;
          height: 50px;
          background-color: black;
        `}
      >
        Button
      </button>
    </>
  );
}
