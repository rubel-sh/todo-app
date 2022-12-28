import React from "react";
import { RouterProvider } from "react-router-dom";
import { route } from "./routes/route";

const App = () => {
  return (
    <div className="bg-backgroundColor">
      <RouterProvider router={route} />
    </div>
  );
};

export default App;
