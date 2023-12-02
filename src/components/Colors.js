import React from "react";

const Colors = ({ colorData, setColor }) => {
  return (
    <ul className="colors">
      {colorData &&
        colorData?.map((item) => {
          return (
            <li
              onClick={() => setColor(item?._id)}
              style={{ background: item.title }}
              key={item._id}
            ></li>
          );
        })}
    </ul>
  );
};

export default Colors;
