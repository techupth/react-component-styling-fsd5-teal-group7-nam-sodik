/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export function Button() {
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        flex-direction: row;
        gap: 5px;
      `}
    >
      <button
        css={css`
          width: 50%;
          height: 50px;
          background-color: #074ee8;
          color: #fff;
        `}
      >
        Button
      </button>
      <button
        css={css`
          width: 50%;
          height: 50px;
          background-color: #07a4e8;
          color: #fff;
        `}
      >
        Button
      </button>
    </div>
  );
}
