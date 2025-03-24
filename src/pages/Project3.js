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
          <h2 className="text-[32px] font-bold"></h2>
          <h2 className="text-[32px] font-bold mt-12"></h2>
          <h2 className="text-[32px] font-bold mt-12"></h2>
        </div>
        <div className="md:w-1/3 text-[#606060] text-lg">
          <p></p>
          <p className="mt-12"></p>
          <ul className="mt-12 list-decimal pl-4">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
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
          <h3 className="text-[32px] font-bold"></h3>
          <p></p>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto mt-20 flex flex-col md:flex-row items-start justify-between">
        <div className="md:w-1/3">
          <img src="/images/project3_detail2.png" alt="Detail 2" className="w-[200px] h-auto object-cover" />
        </div>
        <div className="md:w-2/3 text-[#606060] text-lg">
          <h3 className="text-[32px] font-bold"></h3>
          <p></p>
        </div>
      </section>

      {/* 结尾部分 - 设计流程 */}
      <section className="max-w-[1400px] mx-auto mt-20 flex flex-col md:flex-row justify-between border-t border-gray-400 pt-6">
        <h3 className="text-[32px] font-bold"></h3>
        <ul className="text-[#606060] text-lg list-decimal pl-4">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </section>

      {/* 页脚 */}
      <footer className="max-w-[1400px] mx-auto mt-24 py-6 text-[18px] flex justify-between">
        <p className="text-blue-600"></p>
        <nav className="space-x-6">
          <a href="#" className="hover:underline"></a>
          <a href="#" className="hover:underline"></a>
          <a href="#" className="hover:underline"></a>
        </nav>
      </footer>
    </div>
  );
};

export default Project3;