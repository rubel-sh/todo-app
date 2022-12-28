import React from "react";

const TodoFooter = () => {
  return (
    <div className="text-center mt-20 p-5">
      Designed and Developed by <Wrap>Rubel Hossain</Wrap>.
      <br /> Built with <Wrap>React.js</Wrap>, <Wrap>Redux</Wrap>,{" "}
      <Wrap>Firebase</Wrap> and <Wrap>Tailwind</Wrap>. Hosted on{" "}
      <Wrap>Netlify</Wrap>.
    </div>
  );
};

export default TodoFooter;

const Wrap = ({ children }) => {
  return (
    <span className="text-primaryColor text-sm font-bold">{children}</span>
  );
};
