import { Routes, Route } from "react-router-dom";

import Landing from "../pages/Landing";
import DashboardPage from "../pages/DashboardPage";
import UploadPage from "../pages/UploadPage";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />

      <Route path="/upload" element={<UploadPage />} />

      <Route path="/dashboard" element={<DashboardPage />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}