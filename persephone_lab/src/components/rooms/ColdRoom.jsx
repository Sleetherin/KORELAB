// ColdRoom.jsx
import React from "react";

const ColdRoom = ({ ctx, canvas }) => {
  if (!ctx || !canvas) return null;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "lightblue";
  ctx.fillRect(50, 50, 700, 500);
  ctx.fillStyle = "white";
  ctx.font = "20px Arial";
  ctx.fillText("Welcome to the Cold Room", 300, 300);

  return null;
};

export default ColdRoom;
