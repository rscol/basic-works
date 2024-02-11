import React from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavLayout from "./layouts/NavLayout";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import Contact from "./pages/Contact";
import MaintenancePage from "./pages/MainntainacePage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <React.Fragment>
      <Routes>
        <Route
          path="/"
          element={
            <NavLayout>
              <LandingPage />
            </NavLayout>
          }
        />
        <Route
          path="/AboutPage"
          element={
            <NavLayout>
              <AboutPage />
            </NavLayout>
          }
        />
        <Route
          path="/Contact"
          element={
            <NavLayout>
              <Contact />
            </NavLayout>
          }
        />
        {/* Catch-all route */}
        <Route
          path="*"
          element={
            <NavLayout>
              <MaintenancePage />
            </NavLayout>
          }
        />
      </Routes>
    </React.Fragment>
  );
}

export default App;
