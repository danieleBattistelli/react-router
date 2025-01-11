import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLayout from "./components/layout/AdminLayout";
import DashboardPage from "./pages/DashboardPage";
import ListPage from "./pages/blogs/ListPage";
import CreatePage from "./pages/blogs/CreatePage";
import ShowPage from "./pages/blogs/ShowPage";
import NotFoundPage from "./pages/NotFoundPage";
import AboutUsPage from "./pages/AboutUsPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AdminLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="/list-blogs">
            <Route index element={<ListPage />} />
            <Route path="create" element={<CreatePage />} />
            <Route path=":id" element={<ShowPage />} />
          </Route>
          <Route path="/about" index element={<AboutUsPage />} ></Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;