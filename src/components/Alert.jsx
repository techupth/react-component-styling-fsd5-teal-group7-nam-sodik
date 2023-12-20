// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export function Alert(props) {
  if (props.status === "error") {
    return (
      <>
        <div
          css={css`
            display: flex;
            color: black;
            width: 650px;
            height: 76px;
            background-color: #f9c8c8;
            align-items: center;
            padding-left: 30px;
            gap: 15px;
            border-radius: 5px;
          `}
        >
          <img src="./src/image/frown.png"></img>
          This is error alert box
        </div>
      </>
    );
  } else if (props.status === "warning") {
    return (
      <>
        <div
          css={css`
            display: flex;
            color: black;
            width: 650px;
            height: 76px;
            background-color: #f9d9c8;
            align-items: center;
            padding-left: 30px;
            gap: 15px;
            border-radius: 5px;
          `}
        >
          <img src="./src/image/alert-triangle.png"></img>
          This is warning alert box
        </div>
      </>
    );
  } else if (props.status === "info") {
    return (
      <>
        <div
          css={css`
            display: flex;
            color: black;
            width: 650px;
            height: 76px;
            background-color: #f9ebc8;
            align-items: center;
            padding-left: 30px;
            gap: 15px;
            border-radius: 5px;
          `}
        >
          <img src="./src/image/alert-circle.png"></img>
          This is info alert box
        </div>
      </>
    );
  } else if (props.status === "success") {
    return (
      <>
        <div
          css={css`
            display: flex;
            color: black;
            width: 650px;
            height: 76px;
            background-color: #cef7cd;
            align-items: center;
            padding-left: 30px;
            gap: 15px;
            border-radius: 5px;
          `}
        >
          <img src="./src/image/check-circle.png"></img>
          This is success alert box
        </div>
      </>
    );
  }
}
