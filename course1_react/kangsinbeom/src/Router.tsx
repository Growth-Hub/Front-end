import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";

const PaginationPage = lazy(() => import("./pages/Pagination"));

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pagination" Component={PaginationPage} />
        <Route path="/" Component={HomePage} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
