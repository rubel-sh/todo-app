import React from "react";

const HoverTooltip = ({ children, content }) => {
  return (
    <div className="relative">
      {/* <div className="absolute left-0 top-1/2  text-sm text-white rounded-md p-2 border bg-slate-600">
        {content}
      </div> */}
      {children}
    </div>
  );
};

export default HoverTooltip;
