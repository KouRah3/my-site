import React from "react";
import { Link } from "react-router-dom";
import AnimatedText from "./components/AnimatedText";

const projects = [
  {
    id: 1,
    title: "01 / 産学連協授業｜進級制作",
    description: "名刺管理サービス「QuickCard」ランディングページ制作",
    extraInfo: "名刺管理の課題を解決するLPを設計。視覚的デザインとストーリーテリングで関心を引き、スムーズにダウンロードへ誘導。",
    linkText: "Read more",
    link: "/project1",
    image: process.env.PUBLIC_URL + "/images/project1.png", // 🚀 修复路径
  },
  {
    id: 2,
    title: "02 / 情報デザイン課題",
    description: "新宿の祭りとイベント情報をガイドする観光アプリ「S.Fest」",
    extraInfo: "新宿の祭りを、地元民のように深く体験するためのパスポート。",
    linkText: "Read more",
    link: "/project2",
    image: process.env.PUBLIC_URL + "/images/project2.png", // 🚀 修复路径
  },
  {
    id: 3,
    title: "03 / サイト設計課題",
    description: "「DJI Osmo Pocket3」 キャンペンページ制作",
    extraInfo: "「飲食店 × Pocket 3」をテーマに、日本市場での認知度向上と売上増加を目指すSNSキャンペーン。",
    linkText: "Read more",
    link: "/project3",
    image: process.env.PUBLIC_URL + "/images/project3.png", // 🚀 修复路径
  },
];

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-[#F3F3F3] font-['DM_Sans'] px-[140px] md:px-[100px] sm:px-[40px] py-10">
        {/* 头部导航栏 */}
        <header className="max-w-[1400px] mx-auto flex justify-between items-center py-6 text-[#181717]">
          <h1 className="text-4xl font-bold">JL.</h1>
          <nav className="space-x-10 text-[18px]">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/about" className="hover:underline">About me</Link>
            <Link to="/playground" className="hover:underline">Playground</Link>
            <Link to="/contact" className="hover:underline">Contact</Link>
          </nav>
        </header>

        {/* 个人介绍 */}
        <section className="max-w-[1400px] mx-auto mt-[13vw] flex flex-col md:flex-row items-center justify-between text-[#181717]">
          <div className="md:w-3/5 flex flex-col">
          <AnimatedText text="こんにちは、ここは江瀾のポートフォリオです☺︎"
          className="text-[60px] lg:text-[80px] xl:text-[90px] "
          /> 
          </div>
        </section>
        {/* 替换 ↓ 为图片箭头，左对齐并保持相对定位 */}
        <div className="max-w-[1400px] mx-auto flex justify-end mt-[5vw] mb-[8vw]">
          <img src={process.env.PUBLIC_URL + "/images/arrow-down.png"} alt="箭头" className="w-14 h-14" />
        </div>

        {/* 项目区域 */}
        <section className="max-w-[1400px] mx-auto space-y-20">
          {projects.map((project, index) => (
            <div key={project.id} className="border-b border-b-[#181717] pb-24 pt-5 flex flex-col md:flex-row items-start gap-32">
              {/* 让文本部分变宽一些，图片变小 */}
              <div className="md:w-2/5 flex flex-col justify-between h-full">
                <h3 className="text-lg text-[#181717] tracking-wide !text-[18px] mb-6">{project.title}</h3>
                <p className="text-lg text-[#181717] text-base leading-relaxed !text-[18px] mb-6">{project.description}</p>
                <p className=" text-[#888888] text-ms mb-8">{project.extraInfo}</p>
                <Link to={project.link} className="link-underline mt-[9vw]">
                  <span>{project.linkText}</span>
                  <svg viewBox="0 0 13 20">
                    <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                  </svg>
                </Link>
              </div>
              {/* 让图片部分变窄一点，比如 2/5 或 5/12 */}
              <Link to={`/project${index + 1}`} className="block md:w-3/5">
                <img src={project.image} alt={project.title} className="w-full aspect-[16/8] object-cover border border-[#606060]" />
              </Link>
            </div>
          ))}
        </section>

        {/* 页脚 */}
        <footer className="max-w-[1400px] mx-auto mt-36 py-6 text-sm flex justify-between">
          <p className="text-[#181717]">Lan Jiang コウラン — 2025</p>
          <nav className="space-x-6">
            <a href="#" className="hover:underline">Top</a>
            <a href="#" className="hover:underline">Instagram</a>
            <a href="#" className="hover:underline">Weibo</a>
          </nav>
        </footer>
      </div>
  );
};

export default Home;
