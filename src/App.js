import "./App.css";
import Navbar from "./pages/Navbar";
import { BrowserRouter, Route, Routes, HashRouter } from "react-router-dom";
import AppRoutes from "./routes/Routes";

function App() {
  return (
    <>
      <HashRouter>
        <Navbar />
        <main className="app">
          <AppRoutes />
        </main>
      </HashRouter>
    </>
  );
}

export default App;
