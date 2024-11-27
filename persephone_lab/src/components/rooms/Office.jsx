// Office.jsx
import React from "react";

const Office = ({ ctx, canvas }) => {
  if (!ctx || !canvas) return null;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "navy";
  ctx.fillRect(200, 200, 400, 200);
  ctx.fillStyle = "white";
  ctx.font = "20px Arial";
  ctx.fillText("Welcome to the Office", 320, 300);

  return null;
};

export default Office;
