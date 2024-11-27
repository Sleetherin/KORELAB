// SecretRoom.jsx
import React from "react";

const SecretRoom = ({ ctx, canvas }) => {
  if (!ctx || !canvas) return null;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "red";
  ctx.font = "20px Arial";
  ctx.fillText("Shh... This is the Secret Room", 280, 300);

  return null;
};

export default SecretRoom;
