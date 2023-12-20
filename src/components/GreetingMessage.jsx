/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function GreetingMessage(props) {
  // props.type เป็น "primary" แสดงผลแบบ primary
  // props.type เป็น "secondary" แสดงผลแบบ secondary
  if (props.type === "primary") {
    return (
      <div
        css={css`
          border: 1px solid red;
          text-decoration: underline red;
          color: orange;
        `}
      >
        <h1>{props.text}</h1>
      </div>
    );
  } else if (props.type === "secondary") {
    return (
      <div
        css={css`
          color: green;
        `}
      >
        <h1>{props.text}</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>{props.text}</h1>
    </div>
  );
}

export default GreetingMessage;
