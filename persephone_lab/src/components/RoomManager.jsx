import React, { useState } from "react";
import ColdRoom from "./rooms/ColdRoom";
import Entrance from "./rooms/Entrance";
import Garden from "./rooms/Garden";
import Library from "./rooms/Library";
import MainLab from "./rooms/MainLab";
import Office from "./rooms/Office";
import SecretRoom from "./rooms/SecretRoom";
import Canvas from "./Canvas";

const RoomManager = () => {
  const [currentRoom, setCurrentRoom] = useState("Entrance");
  console.log("Getting access to Room Manager");
  const renderRoom = (ctx, canvas) => {
    switch (currentRoom) {
      case "ColdRoom":
        ColdRoom({ ctx, canvas });
        break;
      case "Entrance":
        Entrance({ ctx, canvas });
        break;
      case "Garden":
        Garden({ ctx, canvas });
        break;
      case "Library":
        Library({ ctx, canvas });
        break;
      case "MainLab":
        MainLab({ ctx, canvas });
        break;
      case "Office":
        Office({ ctx, canvas });
        break;
      case "SecretRoom":
        SecretRoom({ ctx, canvas });
        break;
      default:
        break;
    }
  };

  return (
    <div style={styles.container}>
      <Canvas drawRoom={renderRoom} />
      <div style={styles.buttons}>
        <button onClick={() => setCurrentRoom("ColdRoom")}>Cold Room</button>
        <button onClick={() => setCurrentRoom("Entrance")}>Entrance</button>
        <button onClick={() => setCurrentRoom("Garden")}>Garden</button>
        <button onClick={() => setCurrentRoom("Library")}>Library</button>
        <button onClick={() => setCurrentRoom("MainLab")}>Main Lab</button>
        <button onClick={() => setCurrentRoom("Office")}>Office</button>
        <button onClick={() => setCurrentRoom("SecretRoom")}>Secret Room</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    color: "white",
  },
  buttons: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },
};

export default RoomManager;