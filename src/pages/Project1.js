import React from "react";
import { Link } from "react-router-dom";

const Project1 = () => {
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

      {/* 项目展示部分 */}
      <section className="max-w-[1400px] mx-auto mt-20 flex flex-col md:flex-row items-start justify-between">
        <div className="md:w-1/2">
          <img src="/images/project1-1.png" alt="Project 1" className="w-full h-auto object-cover " />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold">Introduction</h2>
          <p className="text-lg text-[#606060] mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </section>

      {/* 介绍部分 */}
      <section className="max-w-[1400px] mx-auto mt-16">
        <h3 className="text-2xl font-bold mb-4">Introduction</h3>
        <p className="text-lg text-[#606060]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </section>

      {/* 角色部分 */}
      <section className="max-w-[1400px] mx-auto mt-16">
        <h3 className="text-2xl font-bold mb-4">My Role</h3>
        <p className="text-lg text-[#606060]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </section>

      {/* 设计过程部分 */}
      <section className="max-w-[1400px] mx-auto mt-16">
        <h3 className="text-2xl font-bold mb-4">Design Process</h3>
        <ul className="list-disc list-inside text-lg text-[#606060]">
          <li>Lorem ipsum</li>
          <li>Dolor sit amet</li>
          <li>Lorem ipsum</li>
          <li>Dolor sit amet</li>
        </ul>
      </section>

      {/* 设计展示 */}
      <section className="max-w-[1400px] mx-auto mt-16 space-y-20">
        {[1, 2, 3].map((index) => (
          <div key={index} className="flex flex-col md:flex-row items-start gap-8">
            <div className="md:w-1/2">
              <img src="/images/project1-1.png" alt={`Project 1 - ${index}`} className="w-full h-auto object-cover border border-gray-300" />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">My Role</h3>
              <p className="text-lg text-[#606060]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* 页脚 */}
      <footer className="max-w-[1400px] mx-auto mt-24 py-6 text-sm flex justify-between">
        <p className="text-[#181717]">Lan Jiang コウラン — 2025</p>
        <nav className="space-x-6">
          <a href="#" className="hover:underline">Artstation</a>
          <a href="#" className="hover:underline">LinkedIn</a>
          <a href="#" className="hover:underline">Twitter</a>
        </nav>
      </footer>
    </div>
  );
};

export default Project1;