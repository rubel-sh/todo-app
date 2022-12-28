import React from "react";

const CardHeading = ({ children }) => {
  return (
    <h2 className="text-xl lg:text-2xl text-primaryColor font-medium mb-6">
      {children}
    </h2>
  );
};

export default CardHeading;
