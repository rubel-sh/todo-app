import React from "react";

const CardHeading = ({ children }) => {
  return (
    <h2 className="text-xl lg:text-lg text-primaryColor font-medium mb-6 pl-4 border-l-4 border-l-primaryColor">
      {children}
    </h2>
  );
};

export default CardHeading;
