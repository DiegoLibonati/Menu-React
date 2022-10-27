import React from "react";

export const BtnCategory = ({ event_func, category }) => {
  return <button onClick={event_func}>{category}</button>;
};
