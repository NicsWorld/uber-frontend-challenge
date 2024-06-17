import { useEffect, useMemo, useState } from "react";

export const Shape = ({ data }: any) => {
  const [selected, setSelected] = useState(new Set());
  //   const countOfVisibleBoxes = useMemo(() => {

  //   }, [data])
  const countOfVisibleBoxes = data.reduce((acc: any, box: any) => {
    if (box === "1") {
      acc += 1;
    }
    return acc;
  }, 0);

  const undo = () => {
    // remove green color every 500ms
    const keys = Array.from(selected.keys());
    const removeNext = () => {
      if (keys.length) {
        const currentKey = keys.shift();
        setSelected((prev) => {
          const updatedKeys = new Set(prev);
          updatedKeys.delete(currentKey);
          return updatedKeys;
        });
        setTimeout(removeNext, 500);
      } else {
      }
    };
    setTimeout(removeNext, 100);
  };

  useEffect(() => {
    if (selected.size >= countOfVisibleBoxes) {
      undo();
    }
  }, [selected]);

  const handleClick = (e: any) => {
    const { target } = e;
    const index = target.getAttribute("data-index");
    const status = target.getAttribute("data-status");
    console.log("index", index);

    if (index === null || status === "hidden") {
      return;
    }

    setSelected((prev) => {
      return new Set(prev.add(index));
    });
  };

  return (
    <div className="wrapper" onClick={handleClick}>
      {data.map((item: any, index: any) => {
        const squareVisibility = item === "1" ? "visible" : "hidden";
        const isSelected = selected.has(index.toString());
        return (
          <button
            className={`${squareVisibility} square ${isSelected && "green"}`}
            key={index}
            data-index={index}
            data-status={squareVisibility}
          >
            {/* {item} */}
          </button>
        );
      })}
    </div>
  );
};
