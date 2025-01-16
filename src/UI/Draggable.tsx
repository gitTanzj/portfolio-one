import React, { ReactNode } from "react";
import { useDrag } from "react-dnd";

interface DraggableItemProps {
  children: ReactNode
}

const DraggableItem: React.FC<DraggableItemProps> = ({ children }) => {
    const [{ isDragging }, dragRef] = useDrag({
      type: "ITEM",
      item: { children },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    });
  
    return (
      <div
        ref={dragRef}
        style={{
          cursor: "move",
        }}
      >
        {children}
      </div>
    );
  };
  
  export default DraggableItem;