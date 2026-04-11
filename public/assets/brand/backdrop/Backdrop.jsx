import React from "react";

function Backdrop() {
  return (
    <div className="stage-bg">
      <svg
        width="707"
        height="224"
        viewBox="0 0 707 224"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M707 204.763V223.764H0.000488281V204.763H707Z"
          style={{ fill: "var(--color-primary-20)" }}
        />
        <path
          d="M707 204.764H0.000488281L55.2798 160.367H651.72L707 204.764Z"
          style={{ fill: "var(--color-primary-10)" }}
        />
      </svg>
    </div>
  );
}

export default Backdrop;
