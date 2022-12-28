import React from "react";

const Container = ({ children }) => {
  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 text-secondaryColor">
      {children}
    </div>
  );
};

export default Container;
