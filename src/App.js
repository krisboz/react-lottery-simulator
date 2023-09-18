import "./App.css";
import Navbar from "./pages/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppRoutes from "./routes/Routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <main className="app">
          <AppRoutes />
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
