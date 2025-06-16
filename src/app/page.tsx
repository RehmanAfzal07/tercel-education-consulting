"use client";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Services from "../pages/Services";
import AboutUs from "../pages/AboutUs";
import Destinations from "../pages/Destinations";
import IvyLeague from "../pages/IvyLeague";
import Ieltspage from '../pages/Ieltspage'
import FAQs from "../pages/FAQs";
import Home from "../pages/Home";

function App() {
  const [activePage, setActivePage] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderPage = () => {
    switch (activePage) {
      case "About Us":
        return <AboutUs />;
         case "Destinations":
        return <Destinations />;
      case "Ivy League":
        return <IvyLeague />;
      case "Ieltspage":
        return <Ieltspage/>
       case "Services":
        return <Services />;
      case "FAQs":
        return <FAQs />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar - hidden on mobile */}
      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
     
      {/* Main content */}
      <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-white mt-5">
        {renderPage()}
        <Services/>
        <AboutUs/>
      </main>
    </div>
  );
}

export default App;
