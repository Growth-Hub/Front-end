import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";

const SearchPage = lazy(() => import("./pages/Search"));
const PaginationPage = lazy(() => import("./pages/Pagination"));

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pagination" Component={PaginationPage} />
        <Route path="/" Component={HomePage} />
        <Route path="/search" Component={SearchPage} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
