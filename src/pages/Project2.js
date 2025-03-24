import React from "react";
import { Link } from "react-router-dom";

const Project2 = () => {
  return (
    <div className="w-full min-h-screen font-['DM_Sans'] px-[140px] md:px-[100px] sm:px-[40px] py-10">
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

      {/* **第一部分: 三列布局 (Introduction + My Role) ** */}
      <section className="max-w-[1400px] mx-auto mt-20 grid grid-cols-[1fr_2fr_1fr] gap-x-10 gap-y-16 items-start">
        {/* **左列: 标题部分 (间距更大，保证与正文对齐)** */}
        <div className="flex flex-col space-y-20">
            <h2 className="text-3xl font-bold"></h2>
            <h3 className="text-2xl font-bold"></h3>
            <h3 className="text-2xl font-bold"></h3>
        </div>

        {/* **中列: 介绍文本 (稍小的行距，确保对齐左侧标题)** */}
        <div className="flex flex-col space-y-10">
            <p className="text-lg text-[#606060] leading-relaxed">
           
            </p>
            <p className="text-lg text-[#606060] leading-relaxed">
           
            </p>
            <ul className="text-lg text-[#606060] list-disc pl-5">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            </ul>
        </div>

        {/* **右列: 图片，保持与中间列垂直居中对齐** */}
        <div className="flex justify-end items-center">
            <img src="/images/project2-1.png" alt="Project 2 Main" className="w-[250px] object-cover border border-gray-300" />
        </div>
      </section>

      {/* **分割线** */}
      <div className="max-w-[1400px] mx-auto border-t border-gray-400 my-16"></div>

      {/* **第二部分: 三列布局 (My Role + 图片)** */}
      <section className="max-w-[1400px] mx-auto mt-20 grid grid-cols-[1fr_1fr_2fr] gap-x-10 gap-y-16 items-start">
        {/* **左列: 图片部分 (居中对齐)** */}
        <div className="flex flex-col space-y-20 items-center">
            <img src="/images/project2-2.png" alt="Project 2 Image 1" className="w-[200px] object-cover border border-gray-300" />
            <img src="/images/project2-3.png" alt="Project 2 Image 2" className="w-[200px] object-cover border border-gray-300" />
        </div>

        {/* **中列: 标题部分 (间距适中，与正文对齐)** */}
        <div className="flex flex-col space-y-20">
            <h2 className="text-2xl font-bold">Design Process</h2>
            <h3 className="text-2xl font-bold">My Role</h3>
        </div>

        {/* **右列: 介绍文本 (确保每行与左侧标题对齐)** */}
        <div className="flex flex-col space-y-10">
            <ul className="text-lg text-[#606060] list-disc pl-5">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            </ul>
            <p className="text-lg text-[#606060] leading-relaxed">
           
            </p>
        </div>
      </section>

      {/* **分割线** */}
      <div className="max-w-[1400px] mx-auto border-t border-gray-400 my-16"></div>

      {/* **Design Process (结尾部分, 两列布局)** */}
      <section className="max-w-[1400px] mx-auto grid grid-cols-2 gap-10 items-start">
        {/* **左侧: 设计流程标题** */}
        <h3 className="text-2xl font-bold mb-3"></h3>

        {/* **右侧: 设计流程列表** */}
        <ul className="text-lg text-[#606060] list-disc pl-5">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </section>

      {/* **页脚** */}
      <footer className="max-w-[1400px] mx-auto mt-24 py-6 text-sm flex justify-between">
        <p className="text-[#181717]"></p>
        <nav className="space-x-6">
          <a href="#" className="hover:underline"></a>
          <a href="#" className="hover:underline"></a>
          <a href="#" className="hover:underline"></a>
        </nav>
      </footer>
    </div>
  );
};

export default Project2;