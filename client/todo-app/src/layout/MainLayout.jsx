import React from "react";
import { Outlet } from "react-router-dom";
import Container from "../components/Container";
import TodoFooter from "../pages/shared/TodoFooter/TodoFooter";
import TodoNav from "../pages/shared/TodoNav/TodoNav";

const MainLayout = () => {
  return (
    <>
      <TodoNav />
      <Container>
        <Outlet />
      </Container>
      <TodoFooter />
    </>
  );
};

export default MainLayout;
