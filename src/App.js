import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./Home";
import About from "./About";
import Project1 from "./pages/Project1";
import Project2 from "./pages/Project2";
import Project3 from "./pages/Project3";
import Loader from "./components/Loader"; // 🔥 引入 Loader 组件

const App = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation(); // ✅ 现在 `useLocation()` 在 Router 内部了

  useEffect(() => {
    setLoading(true); // ✅ 进入新页面时显示 Loader
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div>
      {loading && <Loader />} {/* 🔥 页面切换时显示 Loader */}
      {!loading && (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project1" element={<Project1 />} />
          <Route path="/project2" element={<Project2 />} />
          <Route path="/project3" element={<Project3 />} />
        </Routes>
      )}
    </div>
  );
};

export default App;