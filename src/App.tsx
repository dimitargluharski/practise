import { Route, Routes } from "react-router-dom";

import { HomePage } from "./pages/HomePage";
import { TopicDetailsPage } from "./pages/TopicDetailsPage";
import { LoginPage } from "./pages/LoginPage";
import { Navbar } from "./components/Navbar/Navbar";
import { CreateNewTopicPage } from "./pages/CreateNewTopicPage";

function App() {
  return (
    <div className="max-w-3xl mx-auto relative bg-white">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:topicId" element={<TopicDetailsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/create-new-topic" element={<CreateNewTopicPage />} />
      </Routes>
    </div >
  )
}

export default App;
