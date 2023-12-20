/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import frown from "../icons/frown.svg";
import circle from "../icons/alert-circle.svg";
import triangle from "../icons/alert-triangle.svg";
import check from "../icons/check-circle.svg";

export function Alert() {
  return (
    <div
      className="button-status"
      css={css`
        display: flex;
        flex-direction: column;
        gap: 5px;
      `}
    >
      <button
        className="error"
        css={css`
      width: 170px
      height: 50px;
      background-color: #F9C8C8;
      text-align:left;
      font-size: 20px;
      font-weight: bold;
      color: #444
    `}
      >
        <img
          src={frown}
          alt="error-icon"
          css={css`
            padding-right: 10px;
          `}
        />
        This is error alert box
      </button>

      <button
        className="warning"
        css={css`
      width: 170px
      height: 50px;
      background-color: #F9D9C8;
      text-align:left;
      font-size: 20px;
      font-weight: bold;
      color: #444
    `}
      >
        <img
          src={triangle}
          alt="warning-icon"
          css={css`
            padding-right: 10px;
          `}
        />
        This is warning alert box
      </button>

      <button
        className="info"
        css={css`
      width: 170px
      height: 50px;
      background-color: #F9EBC8;
      text-align:left;
      font-size: 20px;
      font-weight: bold;
      color: #444
    `}
      >
        <img
          src={circle}
          alt="alert-icon"
          css={css`
            padding-right: 10px;
          `}
        />
        This is info alert box
      </button>

      <button
        className="success"
        css={css`
      width: 170px
      height: 50px;
      background-color: #CEF7CD;
      text-align:left;
      font-size: 20px;
      font-weight: bold;
      color: #444
    `}
      >
        <img
          src={check}
          alt="success-icon"
          css={css`
            padding-right: 10px;
          `}
        />
        This is success alert box
      </button>
    </div>
  );
}
