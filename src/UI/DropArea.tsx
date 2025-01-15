import React from "react";
import { useDrop } from "react-dnd";

const DropArea = () => {
  const [{ isOver }, dropRef] = useDrop({
    accept: "ITEM", // Must match the type defined in useDrag
    drop: (item) => {
      console.log(`Dropped item: ${item.name}`);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div
      ref={dropRef}
      style={{
        height: "100px",
        width: "100%",
        marginTop: "16px",
        backgroundColor: isOver ? "lightgreen" : "lightgray",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid darkgray",
      }}
    >
      {isOver ? "Release to drop" : "Drag item here"}
    </div>
  );
};

export default DropArea;