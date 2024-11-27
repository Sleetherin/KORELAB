import React, { useRef, useEffect } from "react";

const Canvas = ({ drawRoom }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set up the initial room
    if (drawRoom) {
      drawRoom(ctx, canvas);
    }
  }, [drawRoom]); // Re-run when the room changes

  return (
    <div style={styles.wrapper}>
      <canvas
        ref={canvasRef}
        width={800}
        height={600}
        style={styles.canvas}
      />
    </div>
  );
};

const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#282c34",
  },
  canvas: {
    border: "2px solid #fff",
    backgroundColor: "#000",
  },
};

export default Canvas;
