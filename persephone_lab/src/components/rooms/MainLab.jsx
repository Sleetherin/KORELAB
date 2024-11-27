// MainLab.jsx
import React from "react";

const MainLab = ({ ctx, canvas }) => {
  if (!ctx || !canvas) return null;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "gray";
  ctx.fillRect(150, 150, 500, 300);
  ctx.fillStyle = "white";
  ctx.font = "20px Arial";
  ctx.fillText("This is the Main Lab", 320, 300);

  return null;
};

export default MainLab;
