import React from "react";
import { Link } from "react-router-dom";

const Project3 = () => {
  return (
    <div className="w-full min-h-screen bg-[#F3F3F3] font-['DM_Sans'] px-[140px] md:px-[100px] sm:px-[40px] py-10">
      {/* 头部导航栏 */}
      <header className="max-w-[1400px] mx-auto flex justify-between items-center py-6">
        <h1 className="text-4xl font-bold">JL.</h1>
        <nav className="space-x-10 text-[18px]">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About me</Link>
          <Link to="/playground" className="hover:underline">Playground</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </nav>
      </header>

      {/* 第一部分 - 项目介绍 */}
      <section className="max-w-[1400px] mx-auto mt-20 flex flex-col md:flex-row items-start justify-between">
        <div className="md:w-1/3">
          <h2 className="text-[32px] font-bold">Introduction</h2>
          <h2 className="text-[32px] font-bold mt-12">My Role</h2>
          <h2 className="text-[32px] font-bold mt-12">Design Process</h2>
        </div>
        <div className="md:w-1/3 text-[#606060] text-lg">
          <p>这款APP专注于提供用户友好的电商购物体验，我们设计了一个简洁而高效的界面，使用户能够快速浏览和购买产品。</p>
          <p className="mt-12">在这个项目中，我负责了UI/UX设计、交互逻辑构建以及部分前端开发。我的目标是创造一个无缝的购物体验。</p>
          <ul className="mt-12 list-decimal pl-4">
            <li>用户研究与市场分析</li>
            <li>原型设计和UI开发</li>
            <li>前端代码编写</li>
            <li>优化用户体验</li>
          </ul>
        </div>
        <div className="md:w-1/3 flex justify-end">
          <img src="/images/project3_intro.png" alt="Project 3 Image" className="w-[200px] h-auto object-cover" />
        </div>
      </section>

      {/* 第二部分 - 详细介绍 */}
      <section className="max-w-[1400px] mx-auto mt-20 flex flex-col md:flex-row items-start justify-between border-t border-gray-400 pt-6 ">
        <div className="md:w-1/3">
          <img src="/images/project3_detail1.png" alt="Detail 1" className="w-[200px] h-auto object-cover" />
        </div>
        <div className="md:w-2/3 text-[#606060] text-lg">
          <h3 className="text-[32px] font-bold">Introduction</h3>
          <p>我们采用极简主义的设计风格，让用户能够在最短时间内找到所需的产品，同时确保流畅的浏览体验。</p>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto mt-20 flex flex-col md:flex-row items-start justify-between">
        <div className="md:w-1/3">
          <img src="/images/project3_detail2.png" alt="Detail 2" className="w-[200px] h-auto object-cover" />
        </div>
        <div className="md:w-2/3 text-[#606060] text-lg">
          <h3 className="text-[32px] font-bold">My Role</h3>
          <p>在设计过程中，我们通过用户测试优化了产品分类和搜索功能，使其更加直观和易用。</p>
        </div>
      </section>

      {/* 结尾部分 - 设计流程 */}
      <section className="max-w-[1400px] mx-auto mt-20 flex flex-col md:flex-row justify-between border-t border-gray-400 pt-6">
        <h3 className="text-[32px] font-bold">Design Process</h3>
        <ul className="text-[#606060] text-lg list-decimal pl-4">
          <li>用户研究与需求分析</li>
          <li>原型设计和UI/UX优化</li>
          <li>前端开发与测试</li>
          <li>最终产品发布与反馈收集</li>
        </ul>
      </section>

      {/* 页脚 */}
      <footer className="max-w-[1400px] mx-auto mt-24 py-6 text-[18px] flex justify-between">
        <p className="text-blue-600">Mehmet Akif Karasu — 2020</p>
        <nav className="space-x-6">
          <a href="#" className="hover:underline">Artstation</a>
          <a href="#" className="hover:underline">LinkedIn</a>
          <a href="#" className="hover:underline">Twitter</a>
        </nav>
      </footer>
    </div>
  );
};

export default Project3;