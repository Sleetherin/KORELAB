// Library.jsx
import React from "react";

const Library = ({ ctx, canvas }) => {
  if (!ctx || !canvas) return null;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "tan";
  ctx.fillRect(100, 50, 600, 500);
  ctx.fillStyle = "black";
  ctx.font = "20px Arial";
  ctx.fillText("Welcome to the Library", 320, 300);

  return null;
};

export default Library;
