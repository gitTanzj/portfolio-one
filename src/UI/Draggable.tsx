import React from "react";
import { useDrag } from "react-dnd";

const DraggableItem = ({ name }) => {
    const [{ isDragging }, dragRef] = useDrag({
      type: "ITEM",
      item: { name },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    });
  
    return (
      <div
        ref={dragRef}
        style={{
          opacity: isDragging ? 0.5 : 1,
          cursor: "move",
          padding: "8px",
          margin: "4px",
          backgroundColor: "lightblue",
          border: "1px solid gray",
        }}
      >
        {name}
      </div>
    );
  };
  
  export default DraggableItem;