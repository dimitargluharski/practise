import { Route, Routes } from "react-router-dom";

import { HomePage } from "./pages/HomePage";
import { TopicDetailsPage } from "./pages/TopicDetailsPage";
import { LoginPage } from "./pages/LoginPage";
import { Navbar } from "./components/Navbar/Navbar";
import { CreateNewTopicPage } from "./pages/CreateNewTopicPage";
import { useEffect, useRef, useState } from "react";

function App() {
  const [isScrolling, setIsScrolling] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 0 ? setIsScrolling(true) : setIsScrolling(false);
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="max-w-3xl mx-auto relative">
      <div className={`fixed top-0 left-0 w-full transition-all duration-300 ${isScrolling
        ? "bg-blue-600 shadow-lg"
        : "bg-transparent text-black"
        }`}>
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:topicId" element={<TopicDetailsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/create-new-topic" element={<CreateNewTopicPage />} />
      </Routes>
    </div>
  );
}

export default App;
