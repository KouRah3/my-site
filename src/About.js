import React from "react";
import { Link } from "react-router-dom";
import AnimatedText from "./components/AnimatedText";

const About = () => {
  return (
    <div className="w-full min-h-screen bg-[#F3F3F3] font-['DM_Sans'] px-[140px] md:px-[100px] sm:px-[40px] py-10"> 
        {/* 头部导航栏 */}
        <header className="max-w-[1400px] mx-auto flex justify-between items-center py-6 text-[#181717]">
          <h1 className="text-4xl font-bold">JL.</h1>
          <nav className="space-x-10 text-[18px]">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/about" className="hover:underline">About me</Link>
            <Link to="#playground" className="hover:underline">Playground</Link>
            <Link to="#contact" className="hover:underline">Contact</Link>
          </nav>
        </header>

        {/* 个人介绍 */}
        <section className="max-w-[1400px] mx-auto mt-20 flex flex-col md:flex-row items-start justify-between">
          <div className="md:w-1/2">
            <div className="max-w-[700px] text-left text-[#181717]">
                 <AnimatedText text="Hi I'm Jiang Lan, Engineer & Web Designer." className="text-[60px] md:text-[80px]" />
            </div>
            <p className="text-[18px] text-[#606060] leading-relaxed mb-6 mt-16">
              1999.8生まれ、現在満25歳です。中国出身。家族は両親と「黄豆」という名前の😺がいます‍。
              大学時代はたくさん日本のドラマとバラエティ番組に熱中したため、卒業する一年後日本にまいりました。
            </p>
            <p className="text-[18px] text-[#606060] leading-relaxed mb-6">
              現在は日本電子専門学校のWebデザイン科に在学中。Web業界を目指して、プログラミング、
              Webデザイン、日本語を勉強しています。一年生のうち、日本語能力試験N2、色彩検定3級、
              ビジネス能力検定ジョブパス3級の資格を取得しました。さらに、ITパスポート、日本語能力試験N1、
              LinuCレベル1を合格するために頑張っています。
            </p>
          </div>
          <div className="md:w-1/2 flex justify-end">
            {/* 确保图片路径正确 */}
            <img src="/images/Jiang.jpg" alt="Jiang" className="w-[25vw] h-[35vw] object-cover mt-5" />
          </div>
        </section>

        {/* 技能部分 */}
        <section className="max-w-[1400px] mx-auto mt-24 space-y-20 text-[#181717]">
        {/* Main Software */}
        <div className="grid grid-cols-[200px_1fr] gap-[20px] items-start">
          <h3 className="text-[18px] font-bold underline">Main Software</h3>
          <div>
            <p className="text-[18px]">Html, CSS, JavaScript, React, Tailwind</p>
            <p className="text-[18px] mt-2">Adobe CC, Figma</p>
          </div>
        </div>

        {/* Main Skills */}
        <div className="grid grid-cols-[200px_1fr] gap-[20px] items-start">
          <h3 className="text-[18px] font-bold underline">Main Skills</h3>
          <div>
            <p className="text-[18px]">（这里填写你的技能内容）</p>
          </div>
        </div>
      </section>

        {/* 联系部分 */}
        <section className="max-w-[1400px] mx-auto mt-28  pt-16 flex flex-col md:flex-row gap-x-[37vw] border-t border-[#181717]">
          <p className="text-[32px] font-bold text-[#181717]">◎連絡方法はこちらです →</p>
          <div>
            <p className="text-[18px]">E-mail : 24aw0116@jec.ac.jp</p>
            <p className="text-[18px] mt-5">Tel : 080-6015-9795</p>
          </div>
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

export default About;