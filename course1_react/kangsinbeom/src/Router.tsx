import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthGuard from "./components/auth/AuthGuard";

const HomePage = lazy(() => import("./pages/Home"));
const SearchPage = lazy(() => import("./pages/Search"));
const PaginationPage = lazy(() => import("./pages/Pagination"));
const TestPage = lazy(() => import("./pages/Test"));
const Router = () => {
  return (
    <BrowserRouter>
      <AuthGuard>
        <Routes>
          <Route path="/pagination" Component={PaginationPage} />
          <Route path="/" Component={HomePage} />
          <Route path="/search" Component={SearchPage} />
          <Route path="/test" Component={TestPage} />
        </Routes>
      </AuthGuard>
    </BrowserRouter>
  );
};

export default Router;
