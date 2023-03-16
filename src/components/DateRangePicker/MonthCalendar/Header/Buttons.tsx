import * as React from "react";

export const LeftBtn = ({ onClick = () => {} }) => (
  <button
    aria-label="calendar backward"
    className="w-10 h-10 flex items-center justify-center rounded-lg text-gray-400 hover:text-gray-100 hover:bg-secondary"
    onClick={() => {
      onClick();
    }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-chevron-left"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <polyline points="15 6 9 12 15 18" />
    </svg>
  </button>
);

export const RightBtn = ({ onClick = () => {} }) => (
  <button
    aria-label="calendar forward"
    className="w-10 h-10 flex items-center justify-center rounded-lg text-gray-400 hover:text-gray-100 hover:bg-secondary"
    onClick={() => {
      onClick();
    }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler  icon-tabler-chevron-right"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <polyline points="9 6 15 12 9 18" />
    </svg>
  </button>
);
