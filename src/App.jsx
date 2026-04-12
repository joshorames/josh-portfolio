import "./App.css";
import { Routes, Route } from 'react-router-dom';
import HomePage from "./pages/home";
import GaugePage from "./pages/GaugePage";
import SoftwareHardwarePage from "./pages/SoftwareHardwarePage";
import CustomUIPage from "./pages/CustomUIPage";
import PrintingPage from "./pages/AutomationPage";
import HydroPage from "./pages/HydroponicsBuilderPage";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/GaugeEditor" element={<GaugePage />} />
         <Route path="/SoftwareHardware" element={<SoftwareHardwarePage />} />
          <Route path="/Printing" element={<PrintingPage />} />
          <Route path="/CustomUI" element={<CustomUIPage />} />
          <Route path="/HydroEditor" element={<HydroPage />} />
      </Routes>
    </div>
  );
}
 