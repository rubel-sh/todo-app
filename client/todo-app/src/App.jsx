import React from "react";
import { RouterProvider } from "react-router-dom";
import { route } from "./routes/route";

const App = () => {
  return (
    <div className="bg-backgroundColor dark:bg-slate-900 dark:text-white">
      <RouterProvider router={route} />
    </div>
  );
};

export default App;
