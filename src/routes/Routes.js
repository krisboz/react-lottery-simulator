import App from "../App";
import Home from "../pages/Home";
import PlayPage from "../pages/PlayPage";
import TicketSelector from "../pages/TicketSelector";
import Information from "../pages/Information";
import { Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/play" element={<PlayPage />} />
      <Route path="/select-tickets" element={<TicketSelector />} />
      <Route path="/information" element={<Information />} />
    </Routes>
  );
};

export default AppRoutes;
