// Garden.jsx
import React from "react";

const Garden = ({ ctx, canvas }) => {
  if (!ctx || !canvas) return null;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "green";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "yellow";
  ctx.font = "20px Arial";
  ctx.fillText("Welcome to the Garden", 320, 300);

  return null;
};

export default Garden;
