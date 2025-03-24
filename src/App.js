import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./Home";
import About from "./About";
import Project1 from "./pages/Project1";
import Project2 from "./pages/Project2";
import Project3 from "./pages/Project3";
import Loader from "./components/Loader"; // 🔥 引入 Loader 组件

const App = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation(); // ✅ 现在 `useLocation()` 在 Router 内部了

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 800); // ⏳ 设置 800ms 后隐藏 Loader
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div>
      {loading ? <Loader /> : (  // 🔥 修复 Loader 不消失的问题
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