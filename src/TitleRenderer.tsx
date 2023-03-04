import React, { useCallback, useRef } from 'react';
import { useDrag } from 'react-dnd';
import DropZone from './DropZone';


const TitleRenderer = (node:any) => {

    const ref = useRef(null);

    
    const [{ isDragging }, drag] = useDrag({
        item: {
          type: "component",
          id: "newid",
          //children: data.children,
          //path
        },
        collect: monitor => ({
          isDragging: monitor.isDragging()
        })
      });
      drag(ref);
  

    const handleDrop = 
        (dropZone : any, item : any) => {
          console.log('dropZone', dropZone)
          console.log('item', item)
    
          const splitDropZonePath = dropZone.path.split("-");
          const pathToDropZone = splitDropZonePath.slice(0, -1).join("-");
    
          const newItem = { id: item.id, type: item.type };
          // if (item.type === COLUMN) {
          //   newItem.children = item.children;
          // }
        };


    return <div >
      
      <DropZone
            data={{
              path: ``,
              childrenCount: 0
            }}
            className
            onDrop={handleDrop}
            isLast
          />test
      </div>;
  }
export default TitleRenderer;


