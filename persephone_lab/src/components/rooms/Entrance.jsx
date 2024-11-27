// Entrance.jsx
import React from "react";

const Entrance = ({ ctx, canvas }) => {
  console.log("Getting access to Entrance");
  if (!ctx || !canvas) return null;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "brown";
  ctx.fillRect(100, 100, 600, 400);
  ctx.fillStyle = "white";
  ctx.font = "20px Arial";
  ctx.fillText("This is the Entrance", 320, 300);

  return null;
};

export default Entrance;
